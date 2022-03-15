import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import { appUrls } from 'urls';
import { FormSignIn } from 'forms';

const { Title, Paragraph, Link } = Typography;

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Title level={4} className='mb-10'>
        {t('auth.signIn.content.title')}
      </Title>
      <FormSignIn />
      <Paragraph className='mt-10'>
        {t('auth.signIn.content.footer.doNotHaveAccount')}
        {` `}
        <Link onClick={() => navigate(appUrls.auth.signUp)}>{t('auth.signIn.content.footer.signUp')}</Link>
      </Paragraph>
    </>
  );
};

export default SignIn;
