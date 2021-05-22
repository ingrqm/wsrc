import React from 'react';

import PassRecoveryForm from '@forms/PassRecovery';
import { appUrls } from 'urls';

import { Container, Grid, Link, Box } from '@material-ui/core';

import { StyledMain } from './PassRecovery.styled';

const PassRecovery = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <PassRecoveryForm />
      <Grid alignItems="center" justify="space-between" container>
        <Grid item>
          <Box mt={2} color="dark.contrastText">
            <Link href={appUrls.portal.signIn} color="inherit" variant="body2">
              Pamiętasz hasło?
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default PassRecovery;
