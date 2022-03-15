import { useTranslation } from 'react-i18next';
import { Button, Result } from 'antd';

const NotAuthorized = () => {
  const { t } = useTranslation();

  return (
    <Result
      status='403'
      title={t('error.notAuthorized.title')}
      subTitle={t('error.notAuthorized.subTitle')}
      extra={<Button type='primary'>{t('error.back')}</Button>}
    />
  );
};

export default NotAuthorized;
