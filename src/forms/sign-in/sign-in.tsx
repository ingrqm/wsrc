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
import { timeAtom } from 'atoms/time';
import { initialUserAtom, UserAtom, userAtom } from 'atoms/user';
import { MutationKey } from 'enums';
import { useMutationWithError, userParams } from 'hooks';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
  const setTime = useSetRecoilState(timeAtom);
  const navigate = useNavigate();
  const { key } = userParams<Params>();

  const activation = useMutationWithError<AuthActivationRes, Error, AuthActivationProps>(fetchAuthActivation, {
    mutationKey: MutationKey.activation,
    loadingMessage: t('form.activation.messages.loading'),
    errorMessage: t('form.activation.messages.error'),
    successMessage: t('form.activation.messages.success'),
    onSettled: () => {
      navigate(appUrls.auth.signIn, { replace: true });
    },
  });

  const signIn = useMutationWithError<AuthSignInRet, Error, AuthSignInProps>((payload) => fetchAuthSignIn(payload), {
    mutationKey: MutationKey.signIn,
    loadingMessage: t('form.signIn.messages.loading'),
    errorMessage: t('form.signIn.messages.error'),
    successMessage: t('form.signIn.messages.success'),
    onError: () => {
      setUser(initialUserAtom);
      localStorage.removeItem('authorization');
      sessionStorage.removeItem('authorization');
    },
    onSuccess: (response) => {
      const user: UserAtom = {
        isLoggedIn: true,
        id: response.id,
        mail: response.mail,
        permission: response.permission,
        languageApp: response.languageApp,
        languageChampionship: response.languageChampionship,
        authorization: response.authorization,
        name: response.name,
        lastName: response.lastName,
        age: response.age,
        phone: response.phone,
        continent: response.continent,
        country: response.country,
        region: response.region,
        crew: response.crew,
        datetime: response.join,
      };

      setUser(user);
      setTime(new Date(response.time));

      navigate(appUrls.app.dashboard);

      if (form.getFieldValue([FormInputs.rememberMe])) {
        localStorage.setItem('authorization', response.authorization);
        sessionStorage.removeItem('authorization');
      } else {
        sessionStorage.setItem('authorization', response.authorization);
        localStorage.removeItem('authorization');
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
    if (key) {
      activation.mutateAsync({ key });
      return;
    }

    if (user.isLoggedIn) {
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
