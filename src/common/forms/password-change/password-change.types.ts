import { FormInputs } from './password-change.enum';

export type FormTypes = {
  [FormInputs.password]: string;
  [FormInputs.replyPassword]: string;
};
