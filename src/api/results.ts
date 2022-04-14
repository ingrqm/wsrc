import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';

export type ResultDetailsReq = unknown;

export type ResultDetailsProps = {
  id: number;
} & ResultDetailsReq;

export type ResultDetailsRes = {
  id: number;
  idUser: number;
  startReading: Date;
  startTest: Date | null;
  endTest: Date | null;
  answers: { [key: string]: string } | null;
  reviewers: string[] | null;
  time: Date;
};

export type ResultDetailsRet = ResultDetailsRes;

export const fetchResultDetails = async ({ id }: ResultDetailsProps): Promise<ResultDetailsRet> => {
  const { results } = apiUrls;

  const { data } = await request<ResultDetailsReq, Request<ResultDetailsRes>>(results(id.toString()), Methods.get);

  return data?.data;
};
