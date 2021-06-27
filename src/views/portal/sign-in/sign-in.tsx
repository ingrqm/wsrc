import Head from 'next/head';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Box } from '@material-ui/core';
import { appUrls } from 'urls';
import { Portal } from '@layouts';
import { SignInForm } from '@forms';
import { Link } from '@components';
import { Align } from 'enums/align';

const SignIn: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <Portal>
        <SignInForm />
        <Grid justify='space-between' container>
          <Grid xs={6} item>
            <Box color='dark.contrastText' mt={2}>
              <Link align={Align.left} href={appUrls.portal.passwordRecovery}>
                {t('page.signIn.actions.passwordRecovery')}
              </Link>
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box color='dark.contrastText' mt={2}>
              <Link align={Align.right} href={appUrls.portal.signUp}>
                {t('page.signIn.actions.signUp')}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Portal>
    </>
  );
};

export default SignIn;
