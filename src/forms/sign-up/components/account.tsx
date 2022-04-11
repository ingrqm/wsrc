import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, FormInstance, Input, Select } from 'antd';
import { languageChampionshipOptions } from 'data';
import { FormInputs, Views } from '../sign-up.enum';
import { validationSchema } from '../sign-up.schema';

type Props = {
  form: FormInstance;
  setView: (view: Views) => void;
};

const Account = ({ setView, form }: Props) => {
  const { t } = useTranslation();

  const handleNextStep = useCallback(async () => {
    if (
      await form.validateFields([
        FormInputs.mail,
        FormInputs.password,
        FormInputs.replyPassword,
        FormInputs.languageChampionship,
      ])
    ) {
      setView(Views.profile);
    }
  }, []);

  return (
    <>
      <Form.Item
        name={FormInputs.mail}
        label={t('form.signUp.inputs.mail.label')}
        rules={validationSchema[FormInputs.mail]}
      >
        <Input placeholder={t('form.signUp.inputs.mail.placeholder')} prefix={<MailOutlined />} />
      </Form.Item>
      <Form.Item
        name={FormInputs.password}
        label={t('form.signUp.inputs.password.label')}
        rules={validationSchema[FormInputs.password]}
      >
        <Input.Password placeholder={t('form.signUp.inputs.password.placeholder')} prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item
        name={FormInputs.replyPassword}
        label={t('form.signUp.inputs.replyPassword.label')}
        rules={validationSchema[FormInputs.replyPassword]}
      >
        <Input.Password placeholder={t('form.signUp.inputs.replyPassword.placeholder')} prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item
        name={FormInputs.languageChampionship}
        label={t('form.signUp.inputs.languageChampionship.label')}
        rules={validationSchema[FormInputs.languageChampionship]}
      >
        <Select
          placeholder={t('form.signUp.inputs.languageChampionship.placeholder')}
          options={languageChampionshipOptions}
          filterOption={(search, option) => option?.label.props.children[1].includes(search)}
          showSearch
        />
      </Form.Item>
      <Button type='primary' block onClick={handleNextStep}>
        {t('form.signUp.next.profile')}
      </Button>
    </>
  );
};

export default Account;
