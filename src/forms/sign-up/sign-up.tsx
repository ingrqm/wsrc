import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Steps } from 'antd';
import { Account, Location, Profile } from './components';
import { Views } from './sign-up.enum';
import { initialValues } from './sign-up.schema';
import { FormTypes } from './sign-up.types';

const { Step } = Steps;

const steps = Object.keys(Views);

const FormSignIn = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [values, setValues] = useState<FormTypes>(initialValues);
  const [view, setView] = useState<Views>(Views.account);

  const currentStep = steps.findIndex((key) => key === view);

  const handleFinish = (): void => {
    console.log({ values });
  };

  const handleValuesChange = useCallback((values?: Partial<FormTypes>): void => {
    if (values) {
      form.setFieldsValue(values);
    }

    setValues(form.getFieldsValue(true));
  }, []);

  return (
    <Form
      form={form}
      initialValues={initialValues}
      layout='vertical'
      requiredMark={false}
      onFinish={handleFinish}
      onValuesChange={handleValuesChange}
    >
      <Steps current={currentStep} progressDot className='mb-[36px]'>
        {steps.map((key) => (
          <Step key={key} title={t(`form.signUp.steps.${key}.title`)} />
        ))}
      </Steps>
      {view === Views.account && <Account form={form} setView={setView} />}
      {view === Views.profile && <Profile form={form} setView={setView} />}
      {view === Views.location && (
        <Location form={form} setView={setView} values={values} handleValuesChange={handleValuesChange} />
      )}
    </Form>
  );
};

export default FormSignIn;
