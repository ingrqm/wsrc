import { Rule } from 'antd/lib/form';
import i18n from 'utils/i18next';
import { FormInputs } from './sign-up.enum';
import { FormTypes } from './sign-up.types';

type ValidationSchema = {
  [key: string]: Rule[];
};

const { t } = i18n;

export const validationSchema: ValidationSchema = {
  [FormInputs.mail]: [
    {
      type: 'email',
      message: t(`form.signUp.inputs.mail.validation.type`),
    },
    {
      required: true,
      message: t(`form.signUp.inputs.mail.validation.required`),
    },
  ],
  [FormInputs.password]: [
    {
      required: true,
      message: t(`form.signUp.inputs.password.validation.required`),
    },
    {
      min: 6,
      message: t(`form.signUp.inputs.password.validation.min`),
    },
  ],
  [FormInputs.replyPassword]: [
    {
      required: true,
      message: t(`form.signUp.inputs.password.validation.required`),
    },
    {
      min: 6,
      message: t(`form.signUp.inputs.password.validation.min`),
    },
    ({ getFieldValue }: { getFieldValue: (name: string) => string }) => ({
      validator: (_: any, value: string): Promise<void> =>
        !value || getFieldValue(FormInputs.password) === value ? Promise.resolve() : Promise.reject(new Error()),
      message: t('form.signUp.inputs.replyPassword.validation.match'),
    }),
  ],
  [FormInputs.language]: [
    {
      required: true,
      message: t(`form.signUp.inputs.language.validation.required`),
    },
  ],
  [FormInputs.name]: [
    {
      required: true,
      message: t(`form.signUp.inputs.name.validation.required`),
    },
  ],
  [FormInputs.lastName]: [
    {
      required: true,
      message: t(`form.signUp.inputs.lastName.validation.required`),
    },
  ],
  [FormInputs.age]: [
    {
      required: true,
      message: t(`form.signUp.inputs.age.validation.required`),
    },
  ],
  [FormInputs.phone]: [
    {
      required: true,
      message: t(`form.signUp.inputs.phone.validation.required`),
    },
  ],
  [FormInputs.continent]: [
    {
      required: true,
      message: t(`form.signUp.inputs.continent.validation.required`),
    },
  ],
  [FormInputs.country]: [
    {
      required: true,
      message: t(`form.signUp.inputs.country.validation.required`),
    },
  ],
  [FormInputs.region]: [
    {
      required: true,
      message: t(`form.signUp.inputs.region.validation.required`),
    },
  ],
  [FormInputs.statute]: [
    {
      validator: (_, value) => (value ? Promise.resolve() : Promise.reject()),
      message: t(`form.signUp.inputs.statute.validation.required`),
    },
  ],
};

export const initialValues: Partial<FormTypes> = {};
