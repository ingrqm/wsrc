import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import { userAtom } from 'atoms/user';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';

const NotAuthorized = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  const handleBackToApp = () => {
    if (user.isLoggedIn) {
      navigate(appUrls.app.dashboard);
    } else {
      navigate(appUrls.auth.signIn);
    }
  };

  return (
    <Result
      status='403'
      title={t('error.notAuthorized.title')}
      subTitle={t('error.notAuthorized.subTitle')}
      extra={
        <Button type='primary' onClick={handleBackToApp}>
          {t('error.back')}
        </Button>
      }
    />
  );
};

export default NotAuthorized;
