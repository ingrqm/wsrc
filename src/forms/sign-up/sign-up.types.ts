import { FormInputs, languageChampionship } from './sign-up.enum';

export type FormTypes = {
  [FormInputs.mail]: string;
  [FormInputs.password]: string;
  [FormInputs.replyPassword]: string;
  [FormInputs.language]: languageChampionship | null;
  [FormInputs.name]: string;
  [FormInputs.lastName]: string;
  [FormInputs.age]: number | null;
  [FormInputs.phone]: string;
  [FormInputs.continent]: string | null;
  [FormInputs.country]: string | null;
  [FormInputs.region]: string | null;
  [FormInputs.crew]: string;
  [FormInputs.statute]: boolean;
};
