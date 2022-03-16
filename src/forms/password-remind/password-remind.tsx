import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { AuthPasswordRemindProps, AuthPasswordRemindRet, fetchAuthPasswordRemind } from 'api';
import { useMutationWithError } from 'hooks';
import { appUrls } from 'urls';
import { FormInputs } from './password-remind.enum';
import { initialValues, validationSchema } from './password-remind.schema';

const FormPasswordRemind = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const passwordRemind = useMutationWithError<AuthPasswordRemindRet, Error, AuthPasswordRemindProps>(
    (payload) => fetchAuthPasswordRemind(payload),
    {
      mutationKey: 'passwordRemindMutate',
      loadingMessage: t('form.passwordRemind.messages.loading'),
      errorMessage: t('form.passwordRemind.messages.error'),
      successMessage: t('form.passwordRemind.messages.success'),
      onSuccess: () => {
        navigate(appUrls.auth.signIn);

        form.resetFields();
      },
    }
  );

  const handleFinish = (): void => {
    const payload: AuthPasswordRemindProps = {
      mail: form.getFieldValue(FormInputs.mail),
    };

    passwordRemind.mutateAsync(payload);
  };

  return (
    <Form form={form} initialValues={initialValues} layout='vertical' requiredMark='optional' onFinish={handleFinish}>
      <Form.Item
        name={FormInputs.mail}
        rules={validationSchema[FormInputs.mail]}
        label={t('form.passwordRemind.inputs.mail.label')}
      >
        <Input
          size='large'
          prefix={<MailOutlined />}
          placeholder={t('form.passwordRemind.inputs.mail.placeholder')}
          disabled={passwordRemind.isLoading}
        />
      </Form.Item>
      <Button type='primary' block onClick={form.submit} disabled={passwordRemind.isLoading}>
        {t('form.passwordRemind.submit')}
      </Button>
    </Form>
  );
};

export default FormPasswordRemind;
