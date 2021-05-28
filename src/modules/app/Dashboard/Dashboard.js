import React from 'react';

import { translate } from 'base/i18n';

import { Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { App } from '@layouts';

import { SignIn as SignInForm } from '@forms';

import { Link } from '@components';

const Dashboard = () => (
  <App>
    <SignInForm />
    <Grid justify="space-between" container>
      <Grid item>
        <Box color="dark.contrastText" mt={2}>
          <Link align="left" href={appUrls.portal.signIn}>
            {translate('page.signUp.actions.signIn')}
          </Link>
        </Box>
      </Grid>
    </Grid>
  </App>
);

export default Dashboard;
