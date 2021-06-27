import { FormInputs } from './sign-in.enum';

export type FormTypes = {
  [FormInputs.email]: string;
  [FormInputs.password]: string;
};
