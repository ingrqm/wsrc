import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import { userAtom } from 'atoms/user';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';

const NotFound = () => {
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
      status='404'
      title={t('error.notFound.title')}
      subTitle={t('error.notFound.subTitle')}
      extra={
        <Button type='primary' className='p-5' onClick={handleBackToApp}>
          {t('error.back')}
        </Button>
      }
    />
  );
};

export default NotFound;
