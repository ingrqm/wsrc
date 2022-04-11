import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, FormInstance, Input, Row, Select } from 'antd';
import { ageOptions } from 'data';
import { FormInputs, Views } from '../sign-up.enum';
import { validationSchema } from '../sign-up.schema';

type Props = {
  form: FormInstance;
  setView: (view: Views) => void;
};

const Profile = ({ form, setView }: Props) => {
  const { t } = useTranslation();

  const handleNextStep = useCallback(async () => {
    if (await form.validateFields([FormInputs.name, FormInputs.lastName, FormInputs.age, FormInputs.phone])) {
      setView(Views.location);
    }
  }, []);

  return (
    <>
      <Form.Item
        name={FormInputs.name}
        label={t('form.signUp.inputs.name.label')}
        rules={validationSchema[FormInputs.name]}
      >
        <Input placeholder={t('form.signUp.inputs.name.placeholder')} prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name={FormInputs.lastName}
        label={t('form.signUp.inputs.lastName.label')}
        rules={validationSchema[FormInputs.lastName]}
      >
        <Input placeholder={t('form.signUp.inputs.lastName.placeholder')} prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name={FormInputs.age}
        label={t('form.signUp.inputs.age.label')}
        rules={validationSchema[FormInputs.age]}
      >
        <Select placeholder={t('form.signUp.inputs.age.placeholder')} options={ageOptions} showSearch />
      </Form.Item>
      <Form.Item
        name={FormInputs.phone}
        label={t('form.signUp.inputs.phone.label')}
        rules={validationSchema[FormInputs.phone]}
      >
        <Input placeholder={t('form.signUp.inputs.phone.placeholder')} prefix={<PhoneOutlined />} />
      </Form.Item>
      <Row gutter={[10, 0]}>
        <Col span={12}>
          <Button onClick={() => setView(Views.account)} block>
            {t('form.signUp.back')}
          </Button>
        </Col>
        <Col span={12}>
          <Button type='primary' onClick={handleNextStep} block>
            {t('form.signUp.next.location')}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
