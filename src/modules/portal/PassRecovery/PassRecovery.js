import React from 'react';

import { translate } from 'base/i18n';

import PassRecoveryForm from '@forms/PassRecovery';

import { Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Portal } from '@layouts';

import { Link } from '@components';

const PassRecovery = () => (
  <Portal>
    <PassRecoveryForm />
    <Grid justify="flex-end" container>
      <Grid item>
        <Box color="dark.contrastText" mt={2}>
          <Link align="right" href={appUrls.portal.signIn}>
            {translate('page.passRecovery.actions.signIn')}
          </Link>
        </Box>
      </Grid>
    </Grid>
  </Portal>
);

export default PassRecovery;
