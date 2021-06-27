import { Permission } from 'enums/permission';
import { Age } from 'enums/age';
import { Language } from 'enums/language';

export type UserState = {
  isSignIn: boolean;
  permission?: Permission;
  token?: string;
  name?: string;
  surname?: string;
  serverTime?: number;
  clientTime?: number;
  language?: Language;
  age?: number;
  ageCategory?: Age;
  isParticipating?: boolean;
};

export type SignInUserPayload = {
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
