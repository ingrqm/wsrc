import { Permission, Language } from 'enums';
import { atom } from 'recoil';
import { LanguageChampionship } from 'forms/sign-up/sign-up.enum';

export type User = {
  id: number;
  mail: string;
  permission: Permission;
  language_app: Language;
  language_championship: LanguageChampionship;
  authorization: string;
  name: string;
  last_name: string;
  age: number;
  phone: string;
  continent: string;
  country: string;
  region: string;
  crew: string;
  datetime: Date;
};

export type UserAtom = {
  isLoggedIn: boolean;
} & Partial<User>;

export const initialUserAtom: UserAtom = {
  isLoggedIn: false,
};

export const userAtom = atom({
  key: 'user',
  default: initialUserAtom,
});
