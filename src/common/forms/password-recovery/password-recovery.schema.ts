import i18n from 'i18n';
import * as yup from 'yup';

import { FormInputs } from './password-recovery.enum';

import { FormTypes } from './password-recovery.types';

export const validationSchema = yup.object({
  [FormInputs.email]: yup
    .string()
    .email(i18n.t('form.passwordRecovery.input.email.validation.email'))
    .required(i18n.t('form.passwordRecovery.input.email.validation.required')),
});

export const initialValues: FormTypes = {
  [FormInputs.email]: '',
};
