import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
import { FormPasswordRecovery } from 'forms';

const { Title } = Typography;

const PasswordRecovery = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title level={4} className='mb-10'>
        {t('auth.passwordRecovery.content.title')}
      </Title>
      <FormPasswordRecovery />
    </>
  );
};

export default PasswordRecovery;
