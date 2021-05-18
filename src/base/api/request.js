import axios from 'axios';

/**
 * Creates an API request.
 * @param {string} api - BaseUrl of request.
 * @param {string} method - The type of the HTTP request method.
 * @param {string} url - The endpoint URL.
 * @param {Object} data - The payload data.
 */

export const request = (api, method, url, data) => {
  let requestConfig = {
    baseURL: api,
    method,
    url,
    data,
    headers: {
      'Cache-Control': 'no-cache',
    },
  };

  return axios(requestConfig);
};
