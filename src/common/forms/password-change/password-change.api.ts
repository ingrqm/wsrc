import { request, Methods } from '@utils/api';

import { AccountPasswordChangeReq, AccountPasswordChangeRes } from '@contracts/account';

import { apiUrls } from 'urls';

export const fetchPasswordChange = async (payload: AccountPasswordChangeReq): Promise<AccountPasswordChangeRes> => {
  const {
    ACCOUNT: { PASSWORD_CHANGE },
  } = apiUrls;

  const req: AccountPasswordChangeReq = payload;
  const { data } = await request<AccountPasswordChangeReq, AccountPasswordChangeRes>(
    PASSWORD_CHANGE,
    Methods.patch,
    req
  );

  return data;
};
