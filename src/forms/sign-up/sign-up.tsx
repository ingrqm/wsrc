import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Form, Steps } from 'antd';
import { AuthSignUpProps, AuthSignUpRet, fetchAuthSignUp } from 'api';
import { Language, MutationKey } from 'enums';
import { useMutationWithError } from 'hooks';
import { appUrls } from 'urls';
import { Account, Location, Profile } from './components';
import { FormInputs, Views } from './sign-up.enum';
import { initialValues } from './sign-up.schema';
import { FormTypes } from './sign-up.types';

const { Step } = Steps;

const steps = Object.keys(Views);

const FormSignIn = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [values, setValues] = useState<FormTypes>(initialValues as FormTypes);
  const [view, setView] = useState<Views>(Views.account);
  const navigate = useNavigate();

  const currentStep = steps.findIndex((key) => key === view);

  const signUp = useMutationWithError<AuthSignUpRet, Error, AuthSignUpProps>((payload) => fetchAuthSignUp(payload), {
    mutationKey: MutationKey.signUp,
    loadingMessage: t('form.signUp.messages.loading'),
    errorMessage: t('form.signUp.messages.error'),
    successMessage: t('form.signUp.messages.success'),
    onSuccess: () => {
      navigate(appUrls.auth.signIn);
      form.resetFields();
    },
  });

  const handleFinish = (): void => {
    const payload: AuthSignUpProps = {
      [FormInputs.mail]: values[FormInputs.mail],
      [FormInputs.password]: values[FormInputs.password],
      language_app: Language.en,
      [FormInputs.language]: values[FormInputs.language],
      [FormInputs.name]: values[FormInputs.name],
      [FormInputs.lastName]: values[FormInputs.lastName],
      [FormInputs.age]: values[FormInputs.age],
      [FormInputs.phone]: values[FormInputs.phone],
      [FormInputs.continent]: values[FormInputs.continent],
      [FormInputs.country]: values[FormInputs.country],
      [FormInputs.region]: values[FormInputs.region],
      [FormInputs.crew]: values[FormInputs.crew],
    };

    signUp.mutateAsync(payload);
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
