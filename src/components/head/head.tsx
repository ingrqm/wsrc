import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Head = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const key = location.pathname
    .replace('/', '')
    .replaceAll('/', '.')
    .split('-')
    .map((string) => (string.includes('.') ? string : string[0].toUpperCase() + string.slice(1)))
    .join('');

  return (
    <Helmet>
      <title>{t(`meta.${key}.title`)}</title>
    </Helmet>
  );
};

export default Head;
