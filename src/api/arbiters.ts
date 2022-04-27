import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';

export type ArbitersListReq = unknown;

export type ArbitersListProps = ArbitersListReq;

export type ArbitersListRow = {
  id: number;
  name: string;
  lastName: string;
  phone: string;
};

export type ArbitersListRes = ArbitersListRow[];

export type ArbitersListRet = ArbitersListRes;

export const fetchArbitersList = async (): Promise<ArbitersListRet> => {
  const { arbiters } = apiUrls;

  const { data } = await request<ArbitersListReq, Request<ArbitersListRes>>(arbiters(), Methods.get);

  return data?.data;
};
