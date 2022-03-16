import { Language, Permission } from 'enums';
import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';

export type AuthActivationReq = {
  token: string;
};

export type AuthActivationProps = AuthActivationReq;

export type AuthActivationRes = never;

export type AuthActivationRet = AuthActivationRes;

export const fetchAuthActivation = async (payload: AuthActivationProps): Promise<AuthActivationRet> => {
  const {
    auth: { activation },
  } = apiUrls;

  const { data } = await request<AuthActivationReq, Request<AuthActivationRes>>(activation, Methods.post, payload);

  return data?.data;
};

export type AuthSignInReq = {
  mail: string;
  password: string;
};

export type AuthSignInProps = AuthSignInReq;

export type AuthSignInRes = {
  token: string;
  user: {
    id: number;
    name: string;
    surname: string;
    age: number;
    phone: string;
    mail: string;
    crew: string;
    continent: string;
    country: string;
    region: string;
    language: {
      app: Language;
      championship: Language;
    };
    permission: Permission;
  };
};

export type AuthSignInRet = AuthSignInRes;

export const fetchAuthSignIn = async (payload: AuthSignInProps): Promise<AuthSignInRet> => {
  const {
    auth: { signIn },
  } = apiUrls;

  const { data } = await request<AuthSignInReq, Request<AuthSignInRes>>(signIn, Methods.post, payload);

  return data.data;
};

export type AuthSignInTokenReq = never;

export type AuthSignInTokenProps = AuthSignInTokenReq;

export type AuthSignInTokenRes = {
  token: string;
  user: {
    id: number;
    name: string;
    surname: string;
    age: number;
    phone: string;
    mail: string;
    crew: string;
    continent: string;
    country: string;
    region: string;
    language: {
      app: Language;
      championship: Language;
    };
    permission: Permission;
  };
};

export type AuthSignInTokenRet = AuthSignInTokenRes;

export const fetchAuthSignInToken = async (): Promise<AuthSignInTokenRet> => {
  const {
    auth: { signInToken },
  } = apiUrls;

  const { data } = await request<AuthSignInTokenReq, Request<AuthSignInTokenRes>>(signInToken, Methods.post);

  return data.data;
};

export type SignOutReq = never;

export type SignOutProps = SignOutReq;

export type SignOutRes = never;

export type SignOutRet = SignOutRes;

export const fetchSignOut = async (): Promise<SignOutRet> => {
  const {
    auth: { logout },
  } = apiUrls;

  const { data } = await request<SignOutReq, Request<SignOutRes>>(logout, Methods.post);

  return data.data;
};

export type AuthPasswordRemindReq = {
  mail: string;
};

export type AuthPasswordRemindProps = AuthPasswordRemindReq;

export type AuthPasswordRemindRes = never;

export type AuthPasswordRemindRet = AuthPasswordRemindRes;

export const fetchAuthPasswordRemind = async (payload: AuthPasswordRemindProps): Promise<AuthPasswordRemindRet> => {
  const {
    auth: { passwordRemind },
  } = apiUrls;

  const { data } = await request<AuthPasswordRemindReq, Request<AuthPasswordRemindRes>>(
    passwordRemind,
    Methods.post,
    payload
  );

  return data.data;
};
