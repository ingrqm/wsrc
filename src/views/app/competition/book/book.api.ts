import { apiUrls } from 'urls';

import { CompetitionBookReq, CompetitionBookRes } from 'contracts/competition';
import { request, Methods } from 'utils/api';

export const fetchCompetitionBook = async (payload: CompetitionBookReq): Promise<CompetitionBookRes> => {
  const { COMPETITION } = apiUrls;

  const req: CompetitionBookReq = payload;
  const { data } = await request<CompetitionBookReq, CompetitionBookRes>(COMPETITION, Methods.patch, req);

  return data;
};
