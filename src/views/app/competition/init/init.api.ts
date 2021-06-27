import { apiUrls } from 'urls';

import { CompetitionInitReq, CompetitionInitRes } from 'contracts/competition';
import { request, Methods } from 'utils/api';

export const fetchCompetitionInit = async (payload: CompetitionInitReq): Promise<CompetitionInitRes> => {
  const { COMPETITION } = apiUrls;

  const req: CompetitionInitReq = payload;
  const { data } = await request<CompetitionInitReq, CompetitionInitRes>(COMPETITION, Methods.post, req);

  return data;
};
