import axios from 'axios';

export const request = (api, method, url, data) => {
  const requestConfig = {
    baseURL: api,
    method,
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios(requestConfig);
};
