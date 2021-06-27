import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Box } from '@material-ui/core';
import { appUrls } from 'urls';
import { Portal } from '@layouts';
import { PasswordRecoveryForm, PasswordChangeForm } from '@forms';
import { Link } from '@components';
import { Align } from 'enums/align';

const PasswordRecovery: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { key } = router.query;

  return (
    <>
      <Head>{key ? <title>Password change</title> : <title>Password recovery</title>}</Head>
      <Portal>
        {key ? (
          <PasswordChangeForm />
        ) : (
          <>
            <PasswordRecoveryForm />
            <Grid justify='flex-end' container>
              <Grid item>
                <Box color='dark.contrastText' mt={2}>
                  <Link align={Align.right} href={appUrls.portal.signIn}>
                    {t('page.passwordRecovery.actions.signIn')}
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Portal>
    </>
  );
};
export default PasswordRecovery;
