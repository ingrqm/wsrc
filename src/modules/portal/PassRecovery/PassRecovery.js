import React from 'react';

import { translate } from 'base/i18n';

import PassRecoveryForm from '@forms/PassRecovery';

import { Container, Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Link } from '@components';

import { StyledMain } from './PassRecovery.styled';

const PassRecovery = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <PassRecoveryForm />
      <Grid justify="flex-end" container>
        <Grid item>
          <Box color="dark.contrastText" mt={2}>
            <Link align="end" href={appUrls.portal.signIn}>
              {translate('page.passRecovery.actions.signIn')}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default PassRecovery;
