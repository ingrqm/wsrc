import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import { appUrls } from 'urls';
import { FormPasswordRemind } from 'forms';

const { Title, Paragraph, Link } = Typography;

const PasswordRemind = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Title level={4} className='mb-10'>
        {t('auth.passwordRemind.content.title')}
      </Title>
      <FormPasswordRemind />
      <Paragraph className='mt-10'>
        {t('auth.passwordRemind.content.footer.doYourRemember')}
        {` `}
        <Link onClick={() => navigate(appUrls.auth.signUp)}>{t('auth.passwordRemind.content.footer.signIn')}</Link>
      </Paragraph>
    </>
  );
};

export default PasswordRemind;
