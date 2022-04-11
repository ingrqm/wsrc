import { Permission, LanguageChampionship } from 'enums';
import { FormInputs } from './user-edit.enum';

export type FormTypes = {
  [FormInputs.mail]: string;
  [FormInputs.permission]: Permission;
  [FormInputs.languageChampionship]: LanguageChampionship;
  [FormInputs.name]: string;
  [FormInputs.lastName]: string;
  [FormInputs.age]: number;
  [FormInputs.phone]: string;
  [FormInputs.continent]: string;
  [FormInputs.country]: string;
  [FormInputs.region]: string;
  [FormInputs.crew]: string;
};
