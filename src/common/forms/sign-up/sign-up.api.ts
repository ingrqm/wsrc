import { AccountSignUpReq, AccountSignUpRes } from 'contracts/account';
import { request, Methods } from 'utils/api';
import { apiUrls } from 'urls';

export const fetchSignUp = async (payload: AccountSignUpReq): Promise<AccountSignUpRes> => {
  const {
    ACCOUNT: { SIGN_UP },
  } = apiUrls;

  const req: AccountSignUpReq = payload;
  const { data } = await request<AccountSignUpReq, AccountSignUpRes>(SIGN_UP, Methods.post, req);

  return data;
};
