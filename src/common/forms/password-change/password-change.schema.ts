import * as yup from 'yup';

import i18n from 'i18n';

import { FormInputs } from './password-change.enum';
import { FormTypes } from './password-change.types';

const regex = {
  special: /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,}$/,
};

export const validationSchema = yup.object({
  [FormInputs.password]: yup
    .string()
    .min(5, i18n.t('form.passwordChange.input.password.validation.min'))
    .matches(regex.special, {
      message: i18n.t('form.passwordChange.input.password.validation.specialCharacter'),
    })
    .required(i18n.t('form.passwordChange.input.password.validation.required')),
  [FormInputs.replyPassword]: yup
    .string()
    .min(5, i18n.t('form.passwordChange.input.replyPassword.validation.min'))
    .matches(regex.special, {
      message: i18n.t('form.passwordChange.input.password.validation.specialCharacter'),
    })
    .required(i18n.t('form.passwordChange.input.replyPassword.validation.required'))
    .oneOf([yup.ref('password'), null], i18n.t('form.passwordChange.input.replyPassword.validation.match')),
});

export const initialValues: FormTypes = {
  [FormInputs.password]: '',
  [FormInputs.replyPassword]: '',
};
