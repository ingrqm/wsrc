import { LanguageChampionship } from 'enums';
import { FormInputs } from './sign-up.enum';

export type FormTypes = {
  [FormInputs.mail]: string;
  [FormInputs.password]: string;
  [FormInputs.replyPassword]: string;
  [FormInputs.languageChampionship]: LanguageChampionship;
  [FormInputs.name]: string;
  [FormInputs.lastName]: string;
  [FormInputs.age]: number;
  [FormInputs.phone]: string;
  [FormInputs.continent]: string;
  [FormInputs.country]: string;
  [FormInputs.region]: string;
  [FormInputs.crew]: string;
  [FormInputs.statute]: boolean;
};
