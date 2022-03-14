import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { pathToCamelCase } from 'utils/path';

const Head = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const key = pathToCamelCase(location.pathname);

  return (
    <>
      {key !== '/' && (
        <Helmet>
          <title>{t(`meta.${key}.title`)}</title>
        </Helmet>
      )}
      <Outlet />
    </>
  );
};

export default Head;
