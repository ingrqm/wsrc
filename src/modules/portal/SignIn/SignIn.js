import Head from 'next/head';

import React from 'react';

import { translate } from 'base/i18n';

import { Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Portal } from '@layouts';

import { SignIn as SignInForm } from '@forms';

import { Link } from '@components';

const SignIn = () => (
  <>
    <Head>
      <title>Sign in</title>
    </Head>
    <Portal>
      <SignInForm />
      <Grid justify="space-between" container>
        <Grid xs={6} item>
          <Box color="dark.contrastText" mt={2}>
            <Link align="left" href={appUrls.portal.passwordRecovery}>
              {translate('page.signIn.actions.passwordRecovery')}
            </Link>
          </Box>
        </Grid>
        <Grid xs={6} item>
          <Box color="dark.contrastText" mt={2}>
            <Link align="right" href={appUrls.portal.signUp}>
              {translate('page.signIn.actions.signUp')}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Portal>
  </>
);

export default SignIn;
