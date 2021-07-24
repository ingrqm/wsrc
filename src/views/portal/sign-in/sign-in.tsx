import { NextPage } from 'next';
import Head from 'next/head';

import { useTranslation } from 'react-i18next';

import { Align } from '@enums/align';

import { appUrls } from 'urls';

import { Grid, Box } from '@material-ui/core';

import { Portal } from '@layouts';

import { SignInForm } from '@forms';

import { Link } from '@components';

const SignIn: NextPage = () => {
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
            <Box color='secondary.contrastText' mt={2}>
              <Link align={Align.left} href={appUrls.portal.passwordRecovery}>
                {t('page.signIn.actions.passwordRecovery')}
              </Link>
            </Box>
          </Grid>
          <Grid xs={6} item>
            <Box color='secondary.contrastText' mt={2}>
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
