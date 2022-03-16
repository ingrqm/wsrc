import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import {
  AuthPasswordRecoveryProps,
  AuthPasswordRecoveryRet,
  AuthVerifyPasswordTokenProps,
  AuthVerifyPasswordTokenRet,
  fetchAuthPasswordRecovery,
  fetchVerifyPasswordToken,
} from 'api';
import { useMutationWithError, userParams } from 'hooks';
import { appUrls } from 'urls';
import { FormInputs } from './password-recovery.enum';
import { initialValues, validationSchema } from './password-recovery.schema';

type Params = {
  key?: string;
};

const FormPasswordRecovery = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { key } = userParams<Params>();

  const verify = useMutationWithError<AuthVerifyPasswordTokenRet, Error, AuthVerifyPasswordTokenProps>(
    (payload) => fetchVerifyPasswordToken(payload),
    {
      mutationKey: 'verifyPasswordTokenMutate',
      loadingMessage: t('form.verifyPasswordToken.messages.loading'),
      errorMessage: t('form.verifyPasswordToken.messages.error'),
      onError: () => {
        navigate(appUrls.auth.signIn);
      },
    }
  );

  const passwordRecovery = useMutationWithError<AuthPasswordRecoveryRet, Error, AuthPasswordRecoveryProps>(
    (payload) => fetchAuthPasswordRecovery(payload),
    {
      mutationKey: 'passwordRecoveryMutate',
      loadingMessage: t('form.passwordRecovery.messages.loading'),
      errorMessage: t('form.passwordRecovery.messages.error'),
      successMessage: t('form.passwordRecovery.messages.success'),
      onSuccess: () => {
        navigate(appUrls.auth.signIn);

        form.resetFields();
      },
    }
  );

  const handleFinish = (): void => {
    const payload: AuthPasswordRecoveryProps = {
      password: form.getFieldValue(FormInputs.password),
      replyPassword: form.getFieldValue(FormInputs.replyPassword),
      token: key as string,
    };

    passwordRecovery.mutateAsync(payload);
  };

  useEffect(() => {
    const token = key;

    if (token) {
      verify.mutateAsync({ token });
    } else {
      navigate(appUrls.auth.signIn);
    }
  }, []);

  return (
    <Form form={form} initialValues={initialValues} layout='vertical' requiredMark='optional' onFinish={handleFinish}>
      <Form.Item
        name={FormInputs.password}
        rules={validationSchema[FormInputs.password]}
        label={t('form.passwordRecovery.inputs.password.label')}
      >
        <Input.Password
          size='large'
          prefix={<LockOutlined />}
          placeholder={t('form.passwordRecovery.inputs.password.placeholder')}
          disabled={verify.isLoading || passwordRecovery.isLoading}
        />
      </Form.Item>
      <Form.Item
        name={FormInputs.replyPassword}
        rules={validationSchema[FormInputs.replyPassword]}
        label={t('form.passwordRecovery.inputs.replyPassword.label')}
      >
        <Input.Password
          size='large'
          prefix={<LockOutlined />}
          placeholder={t('form.passwordRecovery.inputs.replyPassword.placeholder')}
          disabled={verify.isLoading || passwordRecovery.isLoading}
        />
      </Form.Item>
      <Button type='primary' block onClick={form.submit} disabled={verify.isLoading || passwordRecovery.isLoading}>
        {t('form.passwordRecovery.submit')}
      </Button>
    </Form>
  );
};

export default FormPasswordRecovery;
