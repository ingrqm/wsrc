import { apiUrls } from 'urls';

import { AccountSignUpReq, AccountSignUpRes } from 'contracts/account';
import { request, Methods } from 'utils/api';

export const fetchSignUp = async (payload: AccountSignUpReq): Promise<AccountSignUpRes> => {
  const {
    ACCOUNT: { SIGN_UP },
  } = apiUrls;

  const req: AccountSignUpReq = payload;
  const { data } = await request<AccountSignUpReq, AccountSignUpRes>(SIGN_UP, Methods.post, req);

  return data;
};
