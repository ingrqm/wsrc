import { Language, Permission } from 'enums';
import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';
import { LanguageChampionship } from 'forms/sign-up/sign-up.enum';

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
  mail?: string;
  password?: string;
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

export type AuthSignUpReq = {
  mail: string;
  password: string;
  language_app: Language;
  language_championship: LanguageChampionship;
  name: string;
  last_name: string;
  age: number;
  phone: string;
  continent: string;
  country: string;
  region: string;
  crew: string | null;
};

export type AuthSignUpProps = AuthSignUpReq;

export type AuthSignUpRes = never;

export type AuthSignUpRet = AuthSignUpRes;

export const fetchAuthSignUp = async ({ ...payload }: AuthSignUpProps): Promise<AuthSignUpRet> => {
  const {
    auth: { signUp },
  } = apiUrls;

  const { data } = await request<AuthSignUpReq, Request<AuthSignUpRes>>(signUp, Methods.post, payload);

  return data.data;
};

export type AuthSignOutReq = never;

export type AuthSignOutProps = AuthSignOutReq;

export type AuthSignOutRes = never;

export type AuthSignOutRet = AuthSignOutRes;

export const fetchAuthSignOut = async (): Promise<AuthSignOutRet> => {
  const {
    auth: { logout },
  } = apiUrls;

  const { data } = await request<AuthSignOutReq, Request<AuthSignOutRes>>(logout, Methods.post);

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

export type AuthPasswordRecoveryReq = {
  password: string;
  replyPassword: string;
  token: string;
};

export type AuthPasswordRecoveryProps = AuthPasswordRecoveryReq;

export type AuthPasswordRecoveryRes = never;

export type AuthPasswordRecoveryRet = AuthPasswordRecoveryRes;

export const fetchAuthPasswordRecovery = async (
  payload: AuthPasswordRecoveryProps
): Promise<AuthPasswordRecoveryRet> => {
  const {
    auth: { passwordRecovery },
  } = apiUrls;

  const { data } = await request<AuthPasswordRecoveryReq, Request<AuthPasswordRecoveryRes>>(
    passwordRecovery,
    Methods.post,
    payload
  );

  return data.data;
};

export type AuthVerifyPasswordTokenReq = {
  token: string;
};

export type AuthVerifyPasswordTokenProps = AuthVerifyPasswordTokenReq;

export type AuthVerifyPasswordTokenRes = never;

export type AuthVerifyPasswordTokenRet = AuthVerifyPasswordTokenRes;

export const fetchVerifyPasswordToken = async (
  payload: AuthVerifyPasswordTokenProps
): Promise<AuthVerifyPasswordTokenRet> => {
  const {
    auth: { passwordRecovery },
  } = apiUrls;

  const { data } = await request<AuthVerifyPasswordTokenReq, Request<AuthVerifyPasswordTokenRes>>(
    passwordRecovery,
    Methods.get,
    payload
  );

  return data.data;
};
