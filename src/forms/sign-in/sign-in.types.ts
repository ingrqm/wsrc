import { FormInputs } from './sign-in.enum';

export type FormTypes = {
  [FormInputs.mail]: string;
  [FormInputs.password]: string;
  [FormInputs.rememberMe]: boolean;
};
