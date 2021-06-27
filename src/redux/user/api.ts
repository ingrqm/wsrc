import { AxiosResponse } from 'axios';
import { apiUrls } from 'urls';
import { request } from 'utils/api';

export const signIn = async (): Promise<AxiosResponse> => {
  const {
    ACCOUNT: { SIGN_IN },
  } = apiUrls;

  return request(SIGN_IN, 'GET');
};

export const signOut = async (): Promise<AxiosResponse> => {
  const {
    ACCOUNT: { SIGN_OUT },
  } = apiUrls;

  return request(SIGN_OUT, 'GET');
};
