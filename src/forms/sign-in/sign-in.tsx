import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import {
  AuthActivationProps,
  AuthActivationRes,
  AuthSignInProps,
  AuthSignInRet,
  fetchAuthActivation,
  fetchAuthSignIn,
} from 'api';
import { User, userAtom } from 'atoms/user';
import { useMutationWithError, userParams } from 'hooks';
import { useRecoilState } from 'recoil';
import { appUrls } from 'urls';
import { FormInputs } from './sign-in.enum';
import { initialValues, validationSchema } from './sign-in.schema';

const { Link } = Typography;

type Params = {
  key?: string;
};

const FormSignIn = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();
  const { key } = userParams<Params>();

  const activation = useMutationWithError<AuthActivationRes, Error, AuthActivationProps>(
    (payload) => fetchAuthActivation(payload),
    {
      mutationKey: 'activationMutate',
      loadingMessage: t('form.activation.messages.loading'),
      errorMessage: t('form.activation.messages.error'),
      successMessage: t('form.activation.messages.success'),
      onSettled: () => {
        navigate(appUrls.auth.signIn, { replace: true });
      },
    }
  );

  const signIn = useMutationWithError<AuthSignInRet, Error, AuthSignInProps>((payload) => fetchAuthSignIn(payload), {
    mutationKey: 'signInMutate',
    loadingMessage: t('form.signIn.messages.loading'),
    errorMessage: t('form.signIn.messages.error'),
    successMessage: t('form.signIn.messages.success'),
    onError: () => {
      setUser(undefined);
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    },
    onSuccess: (response) => {
      const user: User = {
        id: response.user.id,
        name: response.user.name,
        surname: response.user.surname,
        mail: response.user.mail,
        phone: response.user.phone,
        permission: response.user.permission,
        age: response.user.age,
        continent: response.user.continent,
        country: response.user.country,
        region: response.user.region,
        crew: response.user.crew,
        language: {
          app: response.user.language.app,
          championship: response.user.language.championship,
        },
      };

      setUser(user);

      navigate(appUrls.app.dashboard);

      if (form.getFieldValue([FormInputs.rememberMe])) {
        localStorage.setItem('token', response.token);
        sessionStorage.removeItem('token');
      } else {
        sessionStorage.setItem('token', response.token);
        localStorage.removeItem('token');
      }

      form.resetFields();
    },
  });

  const handleFinish = (): void => {
    const payload: AuthSignInProps = {
      mail: form.getFieldValue(FormInputs.mail),
      password: form.getFieldValue(FormInputs.password),
    };

    signIn.mutateAsync(payload);
  };

  useEffect(() => {
    const token = key;

    if (token) {
      activation.mutateAsync({ token });
      return;
    }

    if (user !== undefined) {
      navigate(appUrls.app.dashboard);
    }
  }, []);

  return (
    <Form form={form} initialValues={initialValues} layout='vertical' requiredMark={false} onFinish={handleFinish}>
      <Form.Item
        name={FormInputs.mail}
        rules={validationSchema[FormInputs.mail]}
        label={t('form.signIn.inputs.mail.label')}
      >
        <Input
          size='large'
          prefix={<MailOutlined />}
          placeholder={t('form.signIn.inputs.mail.placeholder')}
          disabled={activation.isLoading || signIn.isLoading}
        />
      </Form.Item>
      <Form.Item
        name={FormInputs.password}
        rules={validationSchema[FormInputs.password]}
        label={t('form.signIn.inputs.password.label')}
      >
        <Input.Password
          size='large'
          prefix={<LockOutlined />}
          placeholder={t('form.signIn.inputs.password.placeholder')}
          disabled={activation.isLoading || signIn.isLoading}
        />
      </Form.Item>
      <Row>
        <Col>
          <Form.Item name={FormInputs.rememberMe} valuePropName='checked'>
            <Checkbox disabled={activation.isLoading || signIn.isLoading}>
              {t('form.signIn.inputs.rememberMe.label')}
            </Checkbox>
          </Form.Item>
        </Col>
        <Col className='ml-auto mb-[24px] p-[5px]'>
          <Link onClick={() => navigate(appUrls.auth.passwordRemind)}>{t('form.signIn.forgotPassword')}</Link>
        </Col>
      </Row>
      <Button type='primary' block onClick={form.submit} disabled={activation.isLoading || signIn.isLoading}>
        {t('form.signIn.submit')}
      </Button>
    </Form>
  );
};

export default FormSignIn;
