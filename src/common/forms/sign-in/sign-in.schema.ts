import i18n from '@utils/i18n';

import * as yup from 'yup';

import { FormInputs } from './sign-in.enum';

import { FormTypes } from './sign-in.types';

const regex = {
  special: /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,}$/,
};

export const validationSchema = yup.object({
  [FormInputs.email]: yup
    .string()
    .email(i18n.t('form.signIn.input.email.validation.email'))
    .required(i18n.t('form.signIn.input.email.validation.required')),
  [FormInputs.password]: yup
    .string()
    .min(5, i18n.t('form.signIn.input.password.validation.min'))
    .matches(regex.special, {
      message: i18n.t('form.signUp.input.password.validation.specialCharacter'),
    })
    .required(i18n.t('form.signIn.input.password.validation.required')),
});

export const initialValues: FormTypes = {
  [FormInputs.email]: '',
  [FormInputs.password]: '',
};
