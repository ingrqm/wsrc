import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import { appUrls } from 'urls';
import { FormSignUp } from 'forms';

const { Title, Paragraph, Link } = Typography;

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Paragraph className='auth-p'>
        {t('auth.signUp.content.footer.doHaveAccount')}
        {` `}
        <Link onClick={() => navigate(appUrls.auth.signIn)}>{t('auth.signUp.content.footer.signIp')}</Link>
      </Paragraph>
      <Title level={4} className='mb-10'>
        {t('auth.signUp.content.title')}
      </Title>
      <FormSignUp />
    </>
  );
};

export default SignUp;
