import { LanguageApp, LanguageChampionship, Permission } from 'enums';
import { atom } from 'recoil';

export type User = {
  id: number;
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
  datetime: Date;
};

export type UserAtom = {
  isLoggedIn: boolean;
} & Partial<User>;

export const initialUserAtom: UserAtom = {
  isLoggedIn: false,
  languageApp: LanguageApp.en,
};

export const userAtom = atom({
  key: 'user',
  default: initialUserAtom,
});
