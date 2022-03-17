import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Col, Form, FormInstance, Input, Row, Select, Typography } from 'antd';
import { continents, countries, regions } from 'data';
import { appUrls } from 'urls';
import { FormInputs, Views } from '../sign-up.enum';
import { validationSchema } from '../sign-up.schema';
import { FormTypes } from '../sign-up.types';

type Props = {
  form: FormInstance;
  values: FormTypes;
  setView: (view: Views) => void;
  handleValuesChange: (values?: Partial<FormTypes>) => void;
};

const { Link } = Typography;

const Location = ({ setView, values, form, handleValuesChange }: Props) => {
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

  const handleSubmit = useCallback(async () => {
    if (
      await form.validateFields([
        FormInputs.continent,
        FormInputs.country,
        FormInputs.region,
        FormInputs.crew,
        FormInputs.statute,
      ])
    ) {
      form.submit();
    }
  }, []);

  return (
    <>
      <Form.Item
        name={FormInputs.continent}
        label={t('form.signUp.inputs.continent.label')}
        rules={validationSchema[FormInputs.continent]}
      >
        <Select
          placeholder={t('form.signUp.inputs.continent.placeholder')}
          options={continentOptions}
          optionFilterProp='label'
          onChange={() => handleValuesChange({ [FormInputs.country]: null, [FormInputs.region]: null })}
          showSearch
        />
      </Form.Item>
      <Form.Item
        name={FormInputs.country}
        label={t('form.signUp.inputs.country.label')}
        rules={validationSchema[FormInputs.country]}
      >
        <Select
          placeholder={t('form.signUp.inputs.country.placeholder')}
          options={countryOptions}
          optionFilterProp='label'
          onChange={() => handleValuesChange({ [FormInputs.region]: null })}
          disabled={countryOptions.length === 0}
          showSearch
        />
      </Form.Item>
      <Form.Item
        name={FormInputs.region}
        label={t('form.signUp.inputs.region.label')}
        rules={validationSchema[FormInputs.region]}
      >
        <Select
          placeholder={t('form.signUp.inputs.region.placeholder')}
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
            {t('form.signUp.inputs.crew.label')}
            <span className='ant-form-item-optional inline-block'>{t('form.optional')}</span>
          </span>
        }
        rules={validationSchema[FormInputs.crew]}
      >
        <Input placeholder={t('form.signUp.inputs.crew.placeholder')} />
      </Form.Item>
      <Form.Item name={FormInputs.statute} rules={validationSchema[FormInputs.statute]} valuePropName='checked'>
        <Checkbox>
          {t('form.signUp.inputs.statute.placeholder.accept')}{' '}
          <Link href={appUrls.document.statute} target='_blank'>
            {t('form.signUp.inputs.statute.placeholder.statute')}
          </Link>
        </Checkbox>
      </Form.Item>
      <Row gutter={[10, 0]}>
        <Col span={12}>
          <Button onClick={() => setView(Views.profile)} block>
            {t('form.signUp.back')}
          </Button>
        </Col>
        <Col span={12}>
          <Button type='primary' onClick={handleSubmit} block>
            {t('form.signUp.submit')}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Location;
