import { Permission } from 'enums';
import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';
import { LanguageChampionship } from 'forms/sign-up/sign-up.enum';

export type UsersListReq = unknown;

export type UsersListProps = UsersListReq;

export type UsersListRow = {
  id: number;
  name: string;
  lastName: string;
  mail: string;
  permission: Permission;
  active: boolean;
  language: LanguageChampionship;
  crew: string;
  join: Date;
};

export type UsersListRes = UsersListRow[];

export type UsersListRet = UsersListRes;

export const fetchUsersList = async (): Promise<UsersListRet> => {
  const { users } = apiUrls;

  const { data } = await request<UsersListReq, Request<UsersListRes>>(users(), Methods.get);

  return data?.data;
};

export type UserDetailsReq = {
  id: number;
};

export type UserDetailsProps = UserDetailsReq;

export type UserDetailsRes = {
  id: number;
  mail: string;
  permission: Permission;
  languageChampionship: LanguageChampionship;
  name: string;
  lastName: string;
  age: number;
  phone: string;
  continent: string;
  country: string;
  region: string;
  crew: string;
  join: Date;
};

export type UserDetailsRet = UserDetailsRes;

export const fetchUserDetails = async ({ id }: UserDetailsProps): Promise<UserDetailsRet> => {
  const { users } = apiUrls;

  const { data } = await request<UserDetailsReq, Request<UserDetailsRes>>(users(id.toString()), Methods.get);

  return data?.data;
};
