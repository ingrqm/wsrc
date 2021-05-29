import Head from 'next/head';

import React from 'react';

import { translate } from 'base/i18n';

import { Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Portal } from '@layouts';

import { SignUp as SignUpForm } from '@forms';

import { Link } from '@components';

const SignUp = () => (
  <>
    <Head>
      <title>Sign up</title>
    </Head>
    <Portal>
      <SignUpForm />
      <Grid justify="space-between" container>
        <Grid item>
          <Box color="dark.contrastText" mt={2}>
            <Link align="left" href={appUrls.portal.signIn}>
              {translate('page.signUp.actions.signIn')}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Portal>
  </>
);

export default SignUp;
