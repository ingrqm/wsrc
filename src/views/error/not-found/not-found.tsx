import { useTranslation } from 'react-i18next';
import { Button, Result } from 'antd';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Result
      status='404'
      title={t('error.notFound.title')}
      subTitle={t('error.notFound.subTitle')}
      extra={<Button type='primary'>{t('error.back')}</Button>}
    />
  );
};

export default NotFound;
