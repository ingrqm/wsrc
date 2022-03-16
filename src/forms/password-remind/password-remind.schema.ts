import { Rule } from 'antd/lib/form';
import i18n from 'utils/i18next';
import { FormInputs } from './password-remind.enum';
import { FormTypes } from './password-remind.types';

type ValidationSchema = {
  [key: string]: Rule[];
};

export const validationSchema: ValidationSchema = {
  [FormInputs.mail]: [
    {
      type: 'email',
      message: i18n.t(`form.passwordRemind.inputs.mail.validation.type`),
    },
    {
      required: true,
      message: i18n.t(`form.passwordRemind.inputs.mail.validation.required`),
    },
  ],
};

export const initialValues: FormTypes = {
  [FormInputs.mail]: '',
};
