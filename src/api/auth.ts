import { LanguageApp, LanguageChampionship, Permission } from 'enums';
import { apiUrls } from 'urls';
import { Methods, Request, request } from 'utils/api';

export type AuthActivationReq = {
  key: string;
};

export type AuthActivationProps = AuthActivationReq;

export type AuthActivationRes = unknown;

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
  id: number;
  idResult?: number;
  startReading?: Date;
  startTest?: Date | null;
  endTest?: Date | null;
  mail: string;
  permission: Permission;
  languageApp: LanguageApp;
  languageChampionship: LanguageChampionship;
  authorization: string;
  name: string;
  lastName: string;
  age: number;
  phone: string;
  continent: string;
  country: string;
  region: string;
  crew: string;
  join: Date;
  time: Date;
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
  languageApp: LanguageApp;
  languageChampionship: LanguageChampionship;
  name: string;
  lastName: string;
  age: number;
  phone: string;
  continent: string;
  country: string;
  region: string;
  crew: string | null;
};

export type AuthSignUpProps = AuthSignUpReq;

export type AuthSignUpRes = unknown;

export type AuthSignUpRet = AuthSignUpRes;

export const fetchAuthSignUp = async ({ ...payload }: AuthSignUpProps): Promise<AuthSignUpRet> => {
  const {
    auth: { signUp },
  } = apiUrls;

  const { data } = await request<AuthSignUpReq, Request<AuthSignUpRes>>(signUp, Methods.post, payload);

  return data.data;
};

export type AuthSignOutReq = unknown;

export type AuthSignOutProps = AuthSignOutReq;

export type AuthSignOutRes = unknown;

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

export type AuthPasswordRemindRes = unknown;

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
  key: string;
};

export type AuthPasswordRecoveryProps = AuthPasswordRecoveryReq;

export type AuthPasswordRecoveryRes = unknown;

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

export type AuthPasswordResetReq = {
  id: number;
};

export type AuthPasswordResetProps = AuthPasswordResetReq;

export type AuthPasswordResetRes = unknown;

export type AuthPasswordResetRet = AuthPasswordResetRes;

export const fetchAuthPasswordReset = async (payload: AuthPasswordResetProps): Promise<AuthPasswordResetRet> => {
  const {
    auth: { passwordReset },
  } = apiUrls;

  const { data } = await request<AuthPasswordResetReq, Request<AuthPasswordResetRes>>(
    passwordReset,
    Methods.post,
    payload
  );

  return data.data;
};

export type AuthVerifyPasswordTokenReq = {
  key: string;
};

export type AuthVerifyPasswordTokenProps = AuthVerifyPasswordTokenReq;

export type AuthVerifyPasswordTokenRes = unknown;

export type AuthVerifyPasswordTokenRet = AuthVerifyPasswordTokenRes;

export const fetchVerifyPasswordToken = async ({
  ...payload
}: AuthVerifyPasswordTokenProps): Promise<AuthVerifyPasswordTokenRet> => {
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
