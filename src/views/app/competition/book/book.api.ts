import { request, Methods } from '@utils/api';

import { CompetitionBookReq, CompetitionBookRes } from '@contracts/competition';

import { apiUrls } from 'urls';

export const fetchCompetitionBook = async (payload: CompetitionBookReq): Promise<CompetitionBookRes> => {
  const { COMPETITION } = apiUrls;

  const req: CompetitionBookReq = payload;
  const { data } = await request<CompetitionBookReq, CompetitionBookRes>(COMPETITION, Methods.patch, req);

  return data;
};
