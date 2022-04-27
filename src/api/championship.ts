import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';
import { ResultDetailsRes } from './results';

export type StartCompetitionReq = unknown;

export type StartCompetitionProps = StartCompetitionReq;

export type StartCompetitionRes = ResultDetailsRes;

export type StartCompetitionRet = StartCompetitionRes;

export const fetchStartCompetition = async (): Promise<StartCompetitionRet> => {
  const {
    championship: { startCompetition },
  } = apiUrls;

  const { data } = await request<StartCompetitionReq, Request<StartCompetitionRes>>(startCompetition, Methods.post);

  return data?.data;
};

export type StartTestReq = unknown;

export type StartTestProps = StartTestReq;

export type StartTestRes = ResultDetailsRes;

export type StartTestRet = StartTestRes;

export const fetchStartTest = async (): Promise<StartTestRet> => {
  const {
    championship: { startTest },
  } = apiUrls;

  const { data } = await request<StartTestReq, Request<StartTestRes>>(startTest, Methods.post);

  return data?.data;
};

export type EndCompetitionReq = {
  answers: { [key: string]: string } | null;
};

export type EndCompetitionProps = EndCompetitionReq;

export type EndCompetitionRes = ResultDetailsRes;

export type EndCompetitionRet = EndCompetitionRes;

export const fetchEndCompetition = async ({ ...payload }: EndCompetitionProps): Promise<EndCompetitionRet> => {
  const {
    championship: { endCompetition },
  } = apiUrls;

  const { data } = await request<EndCompetitionReq, Request<EndCompetitionRes>>(endCompetition, Methods.post, payload);

  return data?.data;
};
