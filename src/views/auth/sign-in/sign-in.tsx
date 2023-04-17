import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import { appUrls } from 'urls';
import { FormSignIn } from 'forms';
import { StyledTitleWrapper } from './sign-in.styled';

const { Title, Paragraph, Link } = Typography;
const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Paragraph className='auth-p'>
        {t('auth.signIn.content.footer.doNotHaveAccount')}
        {` `}
        <Link onClick={() => navigate(appUrls.auth.signUp)}>{t('auth.signIn.content.footer.signUp')}</Link>
      </Paragraph>
      <StyledTitleWrapper className='mb-10'>
        <Title level={2}>
          {t('auth.signIn.infoBox.title1')}
          <span>{t('auth.signIn.infoBox.title2')}</span>
        </Title>
        <Title level={4}>{t('auth.signIn.infoBox.subTitle')}</Title>
      </StyledTitleWrapper>
      <FormSignIn />
    </>
  );
};

export default SignIn;
