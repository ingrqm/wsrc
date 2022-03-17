import { Rule } from 'antd/lib/form';
import i18n from 'utils/i18next';
import { FormInputs } from './password-recovery.enum';
import { FormTypes } from './password-recovery.types';

type ValidationSchema = {
  [key: string]: Rule[];
};

const { t } = i18n;

export const validationSchema: ValidationSchema = {
  [FormInputs.password]: [
    {
      required: true,
      message: t(`form.passwordRecovery.inputs.password.validation.required`),
    },
    {
      min: 6,
      message: t(`form.passwordRecovery.inputs.password.validation.min`),
    },
  ],
  [FormInputs.replyPassword]: [
    {
      required: true,
      message: t(`form.passwordRecovery.inputs.password.validation.required`),
    },
    {
      min: 6,
      message: t(`form.passwordRecovery.inputs.password.validation.min`),
    },
    ({ getFieldValue }: { getFieldValue: (name: string) => string }) => ({
      validator: (_: any, value: string): Promise<void> =>
        !value || getFieldValue(FormInputs.password) === value ? Promise.resolve() : Promise.reject(new Error()),
      message: t('form.passwordRecovery.inputs.replyPassword.validation.match'),
    }),
  ],
};

export const initialValues: FormTypes = {
  [FormInputs.password]: '',
  [FormInputs.replyPassword]: '',
};
