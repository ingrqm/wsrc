import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';

export type StatisticsDashboardReq = unknown;

export type StatisticsDashboardProps = StatisticsDashboardReq;

export type StatisticsDashboardRes =
  | {
      resultsWaitingForReview: number;
      reviews: number;
    }
  | {
      results: number;
      resultsWOngoing: number;
      resultsWithoutArbiter: number;
      resultsWaitingForReview: number;
      reviews: number;
      user: number;
    };

export type StatisticsDashboardRet = StatisticsDashboardRes;

export const fetchStatisticsDashboard = async (): Promise<StatisticsDashboardRet> => {
  const {
    statistics: { dashboard },
  } = apiUrls;

  const { data } = await request<StatisticsDashboardReq, Request<StatisticsDashboardRes>>(dashboard, Methods.get);

  return data?.data;
};
