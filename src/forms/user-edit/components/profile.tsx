import { useTranslation } from 'react-i18next';
import { PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Select } from 'antd';
import { ageOptions } from 'data';
import { FormInputs } from '../user-edit.enum';
import { validationSchema } from '../user-edit.schema';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <Form.Item
        name={FormInputs.name}
        label={t('form.editUser.inputs.name.label')}
        rules={validationSchema[FormInputs.name]}
      >
        <Input placeholder={t('form.editUser.inputs.name.placeholder')} prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name={FormInputs.lastName}
        label={t('form.editUser.inputs.lastName.label')}
        rules={validationSchema[FormInputs.lastName]}
      >
        <Input placeholder={t('form.editUser.inputs.lastName.placeholder')} prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name={FormInputs.age}
        label={t('form.editUser.inputs.age.label')}
        rules={validationSchema[FormInputs.age]}
      >
        <Select placeholder={t('form.editUser.inputs.age.placeholder')} options={ageOptions} showSearch />
      </Form.Item>
      <Form.Item
        name={FormInputs.phone}
        label={t('form.editUser.inputs.phone.label')}
        rules={validationSchema[FormInputs.phone]}
      >
        <Input placeholder={t('form.editUser.inputs.phone.placeholder')} prefix={<PhoneOutlined />} />
      </Form.Item>
    </>
  );
};

export default Profile;
