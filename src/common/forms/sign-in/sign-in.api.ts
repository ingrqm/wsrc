import { apiUrls } from 'urls';

import { AccountSignInReq, AccountSignInRes, AccountActivationReq, AccountActivationRes } from 'contracts/account';
import { request, Methods } from 'utils/api';

export const fetchSigIn = async (payload: AccountSignInReq): Promise<AccountSignInRes> => {
  const {
    ACCOUNT: { SIGN_IN },
  } = apiUrls;

  const req: AccountSignInReq = payload;
  const { data } = await request<AccountSignInReq, AccountSignInRes>(SIGN_IN, Methods.post, req);

  return data;
};

export const fetchAccountActivation = async (payload: AccountActivationReq): Promise<AccountActivationRes> => {
  const {
    ACCOUNT: { ACTIVATION },
  } = apiUrls;

  const req: AccountActivationReq = payload;
  const { data } = await request<AccountActivationReq, AccountActivationRes>(ACTIVATION, Methods.post, req);

  return data;
};
