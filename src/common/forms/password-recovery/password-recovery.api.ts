import { request, Methods } from '@utils/api';

import { AccountPasswordRecoveryReq, AccountPasswordRecoveryRes } from '@contracts/account';

import { apiUrls } from 'urls';

export const fetchPasswordRecovery = async (
  payload: AccountPasswordRecoveryReq
): Promise<AccountPasswordRecoveryRes> => {
  const {
    ACCOUNT: { PASSWORD_RECOVERY },
  } = apiUrls;

  const req: AccountPasswordRecoveryReq = payload;
  const { data } = await request<AccountPasswordRecoveryReq, AccountPasswordRecoveryRes>(
    PASSWORD_RECOVERY,
    Methods.post,
    req
  );

  return data;
};
