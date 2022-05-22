import { Permission, LanguageChampionship, Browser, Platform, Device } from 'enums';
import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';

export type UsersListReq = unknown;

export type UsersListProps = UsersListReq;

export type UsersListRow = {
  id: number;
  name: string;
  lastName: string;
  mail: string;
  permission: Permission;
  active: boolean;
  languageChampionship: LanguageChampionship;
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
  activeAccount: boolean;
  keyActive: string;
  defaultPassword: boolean;
  idResult: number | null;
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

export type UserLogsReq = {
  id: number;
};

export type UserLogsProps = UserLogsReq;

export type UserLogsRow = {
  id: number;
  id_user: number;
  ip: string;
  platform: Platform;
  platformVersion: string;
  platformVersionName: string;
  device: Device;
  browser: Browser;
  browserVersion: string;
  datetime: Date;
  action: string;
  variables: { [key: string]: string | number | boolean };
};

export type UserLogsRes = UserLogsRow[];

export type UserLogsRet = UserLogsRes;

export const fetchUserLogs = async ({ id }: UserLogsProps): Promise<UserLogsRet> => {
  const { logs } = apiUrls;

  const { data } = await request<UserLogsReq, Request<UserLogsRes>>(logs(id.toString()), Methods.get);

  return data?.data;
};

export type UserEditReq = Partial<{
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
}>;

export type UserEditProps = {
  id: number;
} & UserEditReq;

export type UserEditRes = unknown;

export type UserEditRet = UserEditRes;

export const fetchUserEdit = async ({ id, ...payload }: UserEditProps): Promise<UserEditRet> => {
  const { users } = apiUrls;

  const { data } = await request<UserEditReq, Request<UserEditRes>>(users(id.toString()), Methods.put, payload);

  return data?.data;
};

export type UserDeleteReq = unknown;

export type UserDeleteProps = {
  id: number;
};

export type UserDeleteRes = unknown;

export type UserDeleteRet = UserDeleteRes;

export const fetchUserDelete = async ({ id }: UserDeleteProps): Promise<UserDeleteRet> => {
  const { users } = apiUrls;

  const { data } = await request<UserDeleteReq, Request<UserDeleteRes>>(users(id.toString()), Methods.delete);

  return data?.data;
};
