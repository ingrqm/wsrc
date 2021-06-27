import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

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

const getTokenHeader = (): HeaderToken => {
  const token = localStorage.getItem('token');
  const result = {
    Authorization: '',
  };

  if (token) result.Authorization = `Bearer ${token}`;

  return result;
};

export const request = async <T, Y>(url: string, method: Methods, data: T): Promise<AxiosResponse<Y>> => {
  const requestConfig: AxiosRequestConfig = {
    method,
    headers: getTokenHeader(),
    url,
    data,
  };

  return axios(requestConfig);
};
