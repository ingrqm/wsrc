import { FormInputs } from './sign-up.enum';

export type FormTypes = {
  [FormInputs.continent]: string;
  [FormInputs.country]: string;
  [FormInputs.region]: string;
  [FormInputs.crew]: string;
  [FormInputs.language]: string;
  [FormInputs.name]: string;
  [FormInputs.surname]: string;
  [FormInputs.age]: number;
  [FormInputs.phone]: string;
  [FormInputs.email]: string;
  [FormInputs.password]: string;
  [FormInputs.replyPassword]: string;
  [FormInputs.statute]: boolean;
};

export type ContinentTypes = {
  code: string;
  name: string;
};

export type ContinentListTypes = ContinentTypes[];

export type CountryTypes = {
  code?: string;
  name?: string;
  native?: string;
  continent?: string;
  phone?: string;
};

export type CountryListTypes = {
  [key: string]: CountryTypes[];
};

export type RegionListTypes = {
  [key: string]: string[];
};

export type AgeListTypes = number[];

export type LanguageTypes = {
  flag: string;
  code: string;
  name: string;
};

export type LanguageListTypes = LanguageTypes[];
