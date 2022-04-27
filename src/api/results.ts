import { LanguageChampionship, Review } from 'enums';
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
  reviewers:
    | {
        id: number;
        name: string;
        lastName: string;
        phone: string;
      }[]
    | null;
  languageChampionship: LanguageChampionship;
  age: number;
  time: Date;
};

export type ResultDetailsRet = ResultDetailsRes;

export const fetchResultDetails = async ({ id }: ResultDetailsProps): Promise<ResultDetailsRet> => {
  const { results } = apiUrls;

  const { data } = await request<ResultDetailsReq, Request<ResultDetailsRes>>(results(id.toString()), Methods.get);

  return data?.data;
};

export type ResultsAllListReq = {
  type: string;
};

export type ResultsAllListProps = ResultsAllListReq;

export type ResultsAllListRow = {
  id: number;
  idUser: number;
  name: string;
  lastName: string;
  startReading: Date;
  startTest: Date;
  endTest: Date;
  languageChampionship: LanguageChampionship;
  age: number;
  reviews: number;
  reviewsType: Review;
  reviewers:
    | {
        id: number;
        name: string;
        lastName: string;
        phone: string;
      }[]
    | null;
};

export type ResultsAllListRes = ResultsAllListRow[];

export type ResultsAllListRet = ResultsAllListRes;

export const fetchResultsAllList = async (): Promise<ResultsAllListRet> => {
  const { results } = apiUrls;

  const payload = {
    type: 'all',
  };

  const { data } = await request<ResultsAllListReq, Request<ResultsAllListRes>>(results(), Methods.get, payload);

  return data?.data;
};

export type ResultsAssessedListReq = unknown;

export type ResultsAssessedListProps = ResultsAssessedListReq;

export type ResultsAssessedListRow = {
  id: number;
  idUser: number;
  name: string;
  lastName: string;
  startReading: Date;
  startTest: Date;
  endTest: Date;
  points: number;
  languageChampionship: LanguageChampionship;
  age: number;
  crew: string;
  region: string;
  country: string;
  continent: string;
};

export type ResultsAssessedListRes = ResultsAssessedListRow[];

export type ResultsAssessedListRet = ResultsAssessedListRes;

export const fetchResultsAssessedList = async (): Promise<ResultsAssessedListRet> => {
  const { results } = apiUrls;

  const payload = {
    type: 'assessed',
  };

  const { data } = await request<ResultsAssessedListReq, Request<ResultsAssessedListRes>>(
    results(),
    Methods.get,
    payload
  );

  return data?.data;
};

export type ResultsAssignToMeListReq = {
  type: string;
};

export type ResultsAssignToMeListProps = ResultsAssignToMeListReq;

export type ResultsAssignToMeListRow = {
  id: number;
  idUser: number;
  startReading: Date;
  startTest: Date;
  endTest: Date;
  reviews: number;
  reviewsType: Review;
  reviewers:
    | {
        id: number;
        name: string;
        lastName: string;
        phone: string;
      }[]
    | null;
};

export type ResultsAssignToMeListRes = ResultsAssignToMeListRow[];

export type ResultsAssignToMeListRet = ResultsAssignToMeListRes;

export const fetchResultsAssignToMeList = async (): Promise<ResultsAssignToMeListRet> => {
  const { results } = apiUrls;

  const payload = {
    type: 'assign',
  };

  const { data } = await request<ResultsAssignToMeListReq, Request<ResultsAssignToMeListRes>>(
    results(),
    Methods.get,
    payload
  );

  return data?.data;
};

export type ResultAssignArbiterReq = {
  reviewers: number[];
};

export type ResultAssignArbiterProps = {
  id: number;
} & ResultAssignArbiterReq;

export type ResultAssignArbiterRes = unknown;

export type ResultAssignArbiterRet = ResultAssignArbiterRes;

export const fetchResultAssignArbiter = async ({
  id,
  ...payload
}: ResultAssignArbiterProps): Promise<ResultAssignArbiterRet> => {
  const { results } = apiUrls;

  const { data } = await request<ResultAssignArbiterReq, Request<ResultAssignArbiterRes>>(
    results(id.toString()),
    Methods.put,
    payload
  );

  return data?.data;
};
