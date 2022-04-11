import { Rule } from 'antd/lib/form';
import i18n from 'utils/i18next';
import { FormInputs } from './user-edit.enum';
import { FormTypes } from './user-edit.types';

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
  [FormInputs.languageChampionship]: [
    {
      required: true,
      message: t(`form.signUp.inputs.languageChampionship.validation.required`),
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
};

export const initialValues: Partial<FormTypes> = {};
