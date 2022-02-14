import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

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

const getTokenHeader = (): HeaderToken => {
  const token = sessionStorage.getItem('token');

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
  };

  return axios(requestConfig);
};

export const handleApiError = (error: AxiosError<Error>): void => {
  if (error.response && error.response.status) {
    const { status } = error.response;

    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }
};
