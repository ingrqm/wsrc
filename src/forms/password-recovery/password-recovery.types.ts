import { FormInputs } from './password-recovery.enum';

export type FormTypes = {
  [FormInputs.password]: string;
  [FormInputs.replyPassword]: string;
};
