import { CompetitionInitReq, CompetitionInitRes } from 'contracts/competition';
import { request, Methods } from 'utils/api';
import { apiUrls } from 'urls';

export const fetchCompetitionInit = async (payload: CompetitionInitReq): Promise<CompetitionInitRes> => {
  const { COMPETITION } = apiUrls;

  const req: CompetitionInitReq = payload;
  const { data } = await request<CompetitionInitReq, CompetitionInitRes>(COMPETITION, Methods.post, req);

  return data;
};
