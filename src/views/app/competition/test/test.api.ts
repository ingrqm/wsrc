import { CompetitionTestReq, CompetitionTestRes } from 'contracts/competition';
import { request, Methods } from 'utils/api';
import { apiUrls } from 'urls';

export const fetchCompetitionTest = async (payload: CompetitionTestReq): Promise<CompetitionTestRes> => {
  const { COMPETITION } = apiUrls;

  const req: CompetitionTestReq = payload;
  const { data } = await request<CompetitionTestReq, CompetitionTestRes>(COMPETITION, Methods.put, req);

  return data;
};
