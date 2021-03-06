import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelToSnakeCase, charToHtmlCode, htmlCodesToChar, snakeToCamelCase } from 'utils/convert';

type DataRequestType =
  | {
      [key: string]: boolean | number | string | (string | boolean | number)[] | DataRequestType;
    }
  | boolean
  | number
  | string
  | (string | boolean | number)[];

type HeaderToken = {
  Authorization: string;
};

export enum Methods {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
}

export type Request<T> = {
  state: string;
  data: T;
  message: string[];
};

const responseParser = (data: DataRequestType | undefined | null): DataRequestType | undefined | null => {
  switch (typeof data) {
    case 'string':
      return htmlCodesToChar(data);
    case 'object':
      if (Array.isArray(data)) {
        return data.map((val) => responseParser(val)) as DataRequestType;
      }
      return data
        ? (Object.fromEntries(
            Object.entries(data).map(([key, value]) => [snakeToCamelCase(key), responseParser(value)])
          ) as DataRequestType)
        : data;

    default:
      return data;
  }
};

const requestParser = (data: DataRequestType | undefined | null): DataRequestType | undefined | null => {
  switch (typeof data) {
    case 'string':
      return charToHtmlCode(data);
    case 'object':
      if (Array.isArray(data)) {
        return data.map((val) => requestParser(val)) as DataRequestType;
      }
      return data
        ? (Object.fromEntries(
            Object.entries(data).map(([key, value]) => [camelToSnakeCase(key), requestParser(value)])
          ) as DataRequestType)
        : data;

    default:
      return data;
  }
};

axios.interceptors.response.use(
  ({ data, ...request }) => {
    const mappedRequest = {
      ...request,
      data: responseParser(data),
    };

    return mappedRequest;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.request.use(
  ({ data, ...request }) => {
    const mappedRequest = {
      ...request,
      data: requestParser(data),
    };

    return mappedRequest;
  },
  (error) => Promise.reject(error)
);

const getTokenHeader = (): HeaderToken => {
  const token = sessionStorage.getItem('authorization') || localStorage.getItem('authorization');

  const result = {
    Authorization: token || '',
  };

  return result;
};

export const request = async <T, Y>(url: string, method: Methods, data?: T): Promise<AxiosResponse<Y>> => {
  const requestConfig: AxiosRequestConfig = {
    method,
    headers: getTokenHeader(),
    url,
    data,
    ...(method === Methods.get ? { params: requestParser(data as DataRequestType | undefined | null) } : {}),
  };

  return axios(requestConfig);
};

export const handleApiError = (error: AxiosError<Error>): void => {
  if (error.response && error.response.status) {
    const { status } = error.response;

    if (status === 401 || status === 403) {
      sessionStorage.removeItem('authorization');
      localStorage.removeItem('authorization');
      window.location.reload();
    }
  }
};
