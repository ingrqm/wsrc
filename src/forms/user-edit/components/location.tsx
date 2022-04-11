import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TeamOutlined } from '@ant-design/icons';
import { Form, Input, Select } from 'antd';
import { continents, countries, regions } from 'data';
import { FormInputs } from '../user-edit.enum';
import { validationSchema } from '../user-edit.schema';
import { FormTypes } from '../user-edit.types';

type Props = {
  values: FormTypes;
  handleValuesChange: (values?: Partial<FormTypes>) => void;
};

const Location = ({ values, handleValuesChange }: Props) => {
  const { t } = useTranslation();

  const continentOptions = useMemo(
    () => continents.map(({ code }) => ({ value: code, label: t(`data.continent.${code}`) })),
    []
  );

  const countryOptions = useMemo(
    () =>
      countries
        .filter(({ continent }) => continent === values[FormInputs.continent])
        .map(({ native, code }) => ({ label: native, value: code })),
    [values[FormInputs.continent]]
  );

  const regionOptions = useMemo(
    () =>
      regions
        .find(({ code }) => code === values[FormInputs.country])
        ?.regions.map((region) => ({ label: region, value: region })) || [],
    [values[FormInputs.continent], values[FormInputs.country]]
  );

  return (
    <>
      <Form.Item
        name={FormInputs.continent}
        label={t('form.editUser.inputs.continent.label')}
        rules={validationSchema[FormInputs.continent]}
      >
        <Select
          placeholder={t('form.editUser.inputs.continent.placeholder')}
          options={continentOptions}
          optionFilterProp='label'
          onChange={() => handleValuesChange({ [FormInputs.country]: undefined, [FormInputs.region]: undefined })}
          showSearch
        />
      </Form.Item>
      <Form.Item
        name={FormInputs.country}
        label={t('form.editUser.inputs.country.label')}
        rules={validationSchema[FormInputs.country]}
      >
        <Select
          placeholder={t('form.editUser.inputs.country.placeholder')}
          options={countryOptions}
          optionFilterProp='label'
          onChange={() => handleValuesChange({ [FormInputs.region]: undefined })}
          disabled={countryOptions.length === 0}
          showSearch
        />
      </Form.Item>
      <Form.Item
        name={FormInputs.region}
        label={t('form.editUser.inputs.region.label')}
        rules={validationSchema[FormInputs.region]}
      >
        <Select
          placeholder={t('form.editUser.inputs.region.placeholder')}
          options={regionOptions}
          optionFilterProp='label'
          disabled={regionOptions.length === 0}
          showSearch
        />
      </Form.Item>
      <Form.Item
        name={FormInputs.crew}
        label={
          <span>
            {t('form.editUser.inputs.crew.label')}
            <span className='ant-form-item-optional inline-block'>{t('form.optional')}</span>
          </span>
        }
        rules={validationSchema[FormInputs.crew]}
      >
        <Input placeholder={t('form.editUser.inputs.crew.placeholder')} prefix={<TeamOutlined />} />
      </Form.Item>
    </>
  );
};

export default Location;
