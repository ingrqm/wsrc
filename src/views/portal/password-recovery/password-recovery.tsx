import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useTranslation } from 'react-i18next';

import { Align } from '@enums/align';

import { appUrls } from 'urls';

import { Grid, Box } from '@material-ui/core';

import { Portal } from '@layouts';

import { PasswordRecoveryForm, PasswordChangeForm } from '@forms';

import { Link } from '@components';

const PasswordRecovery: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { key } = router.query;

  return (
    <>
      <Head>
        <title>{key ? t('page.passwordChange.head.title') : t('page.passwordRecovery.head.title')}</title>
      </Head>

      <Portal>
        {key ? (
          <PasswordChangeForm />
        ) : (
          <>
            <PasswordRecoveryForm />
            <Grid justify='flex-end' container>
              <Grid item>
                <Box color='secondary.contrastText' mt={2}>
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
