import React from 'react';

import PassRecoveryForm from '@forms/PassRecovery';

import { Container, Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Link } from '@components';

import { StyledMain } from './PassRecovery.styled';

const PassRecovery = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <PassRecoveryForm />
      <Grid alignItems="center" justify="space-between" container>
        <Grid item>
          <Box color="dark.contrastText" mt={2}>
            <Link href={appUrls.portal.signIn}>Pamiętasz hasło?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default PassRecovery;
