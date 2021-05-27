import React from 'react';

import { translate } from 'base/i18n';

import { Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Portal } from '@layouts';

import { SignIn as SignInForm } from '@forms';

import { Link } from '@components';

const SignIn = () => (
  <Portal>
    <SignInForm />
    <Grid justify="space-between" container>
      <Grid xs={6} item>
        <Box color="dark.contrastText" mt={2}>
          <Link align="left" href={appUrls.portal.passRecovery}>
            {translate('page.signIn.actions.passRecovery')}
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
);

export default SignIn;
