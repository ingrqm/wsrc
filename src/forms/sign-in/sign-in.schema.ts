import { Rule } from 'antd/lib/form';
import i18n from 'utils/i18next';
import { FormInputs } from './sign-in.enum';
import { FormTypes } from './sign-in.types';

type ValidationSchema = {
  [key: string]: Rule[];
};

export const validationSchema: ValidationSchema = {
  [FormInputs.mail]: [
    {
      type: 'email',
      message: i18n.t(`form.signIn.inputs.mail.validation.type`),
    },
    {
      required: true,
      message: i18n.t(`form.signIn.inputs.mail.validation.required`),
    },
  ],
  [FormInputs.password]: [
    {
      required: true,
      message: i18n.t(`form.signIn.inputs.password.validation.required`),
    },
    {
      min: 6,
      message: i18n.t(`form.signIn.inputs.password.validation.min`),
    },
  ],
};

export const initialValues: FormTypes = {
  [FormInputs.mail]: '',
  [FormInputs.password]: '',
  [FormInputs.rememberMe]: false,
};
