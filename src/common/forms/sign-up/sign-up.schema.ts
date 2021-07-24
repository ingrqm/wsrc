import i18n from '@utils/i18n';

import * as yup from 'yup';

import { FormInputs } from './sign-up.enum';

import { FormTypes } from './sign-up.types';

const regex = {
  special: /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,}$/,
};

export const validationSchema = yup.object({
  [FormInputs.continent]: yup.string().required(i18n.t('form.signUp.input.continent.validation.required')),
  [FormInputs.country]: yup.string().required(i18n.t('form.signUp.input.country.validation.required')),
  [FormInputs.region]: yup.string().required(i18n.t('form.signUp.input.region.validation.required')),
  [FormInputs.crew]: yup.string(),
  [FormInputs.language]: yup.string().required(i18n.t('form.signUp.input.language.validation.required')),
  [FormInputs.name]: yup
    .string()
    .min(2, i18n.t('form.signUp.input.name.validation.required'))
    .required(i18n.t('form.signUp.input.name.validation.required')),
  [FormInputs.surname]: yup
    .string()
    .min(2, i18n.t('form.signUp.input.surname.validation.min'))
    .required(i18n.t('form.signUp.input.surname.validation.required')),
  [FormInputs.age]: yup.string().required(i18n.t('form.signUp.input.age.validation.required')),
  [FormInputs.phone]: yup.string().required(i18n.t('form.signUp.input.phone.validation.required')),
  [FormInputs.email]: yup
    .string()
    .email(i18n.t('form.signUp.input.email.validation.email'))
    .required(i18n.t('form.signUp.input.email.validation.required')),
  [FormInputs.password]: yup
    .string()
    .min(5, i18n.t('form.signUp.input.password.validation.min'))
    .matches(regex.special, {
      message: i18n.t('form.signUp.input.password.validation.specialCharacter'),
    })
    .required(i18n.t('form.signUp.input.password.validation.required')),
  [FormInputs.replyPassword]: yup
    .string()
    .min(5, i18n.t('form.signUp.input.replyPassword.validation.min'))
    .matches(regex.special, {
      message: i18n.t('form.signUp.input.password.validation.specialCharacter'),
    })
    .required(i18n.t('form.signUp.input.replyPassword.validation.required'))
    .oneOf([yup.ref('password'), null], i18n.t('form.signUp.input.replyPassword.validation.match')),
  [FormInputs.statute]: yup.bool().oneOf([true], i18n.t('form.signUp.input.statute.validation.required')),
});

export const initialValues: FormTypes = {
  [FormInputs.continent]: '',
  [FormInputs.country]: '',
  [FormInputs.region]: '',
  [FormInputs.crew]: '',
  [FormInputs.language]: '',
  [FormInputs.name]: '',
  [FormInputs.surname]: '',
  [FormInputs.age]: 0,
  [FormInputs.phone]: '',
  [FormInputs.email]: '',
  [FormInputs.password]: '',
  [FormInputs.replyPassword]: '',
  [FormInputs.statute]: false,
};
