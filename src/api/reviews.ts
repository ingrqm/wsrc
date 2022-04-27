import { Permission } from 'enums';
import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';
import { ResultDetailsRes } from './results';

export type ReviewListReq = {
  idResult: number;
};

export type ReviewListProps = ReviewListReq;

export type ReviewListRow = {
  id: number;
  idUser: number;
  name: string;
  lastName: string;
  permission: Permission;
  phone: string;
  review: { [key: string]: number } | null;
};

export type ReviewListRes = ReviewListRow[];

export type ReviewListRet = ReviewListRes;

export const fetchReviewList = async ({ ...payload }: ReviewListProps): Promise<ReviewListRet> => {
  const { reviews } = apiUrls;

  const { data } = await request<ReviewListReq, Request<ReviewListRes>>(reviews(), Methods.get, payload);

  return data?.data;
};

export type AddReviewReq = {
  idResult: number;
  review: { [key: string]: number } | null;
};

export type AddReviewProps = AddReviewReq;

export type AddReviewRes = ResultDetailsRes;

export type AddReviewRet = AddReviewRes;

export const fetchAddReview = async ({ ...payload }: AddReviewProps): Promise<AddReviewRet> => {
  const { reviews } = apiUrls;

  const { data } = await request<AddReviewReq, Request<AddReviewRes>>(reviews(), Methods.post, payload);

  return data?.data;
};

export type UpdateReviewReq = {
  review: { [key: string]: number } | null;
};

export type UpdateReviewProps = UpdateReviewReq & {
  id: number;
};

export type UpdateReviewRes = ResultDetailsRes;

export type UpdateReviewRet = UpdateReviewRes;

export const fetchUpdateReview = async ({ id, ...payload }: UpdateReviewProps): Promise<UpdateReviewRet> => {
  const { reviews } = apiUrls;

  const { data } = await request<UpdateReviewReq, Request<UpdateReviewRes>>(
    reviews(id.toString()),
    Methods.put,
    payload
  );

  return data?.data;
};
