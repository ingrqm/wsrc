import { Age } from 'enums/age';
import { Language } from 'enums/language';
import { Permission } from 'enums/permission';

export type AccountGetTimeReq = void;

export type AccountGetTimeRes = {
  time: Date;
};

export type AccountSignUpReq = {
  continent: string;
  country: string;
  region: string;
  crew: string;
  language: string;
  name: string;
  surname: string;
  age: number;
  phone: string;
  email: string;
  password: string;
};

export type AccountSignUpRes = void;

export type AccountSignInReq = {
  email: string;
  password: string;
};

export type AccountSignInRes = {
  data: {
    permission: Permission;
    token: string;
    name: string;
    surname: string;
    serverTime: number;
    clientTime: number;
    language: Language;
    age: number;
    ageCategory: Age;
    isParticipating: boolean;
  };
};

export type AccountActivationReq = {
  token: string;
};

export type AccountActivationRes = void;

export type AccountPasswordChangeReq = {
  token: string;
  password: string;
};

export type AccountPasswordChangeRes = void;

export type AccountPasswordRecoveryReq = {
  email: string;
};

export type AccountPasswordRecoveryRes = void;
