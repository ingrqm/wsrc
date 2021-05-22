import React from 'react';

import PassRecoveryForm from '@forms/PassRecovery';
import Link from 'next/link';
import { appUrls } from 'urls';

import { Container, Grid, Link as StyledLink, Box } from '@material-ui/core';

import { StyledMain } from './PassRecovery.styled';

const PassRecovery = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <PassRecoveryForm />
      <Grid alignItems="center" justify="space-between" container>
        <Grid item>
          <Box mt={2} color="dark.contrastText">
            <Link href={appUrls.portal.signIn}>
              <StyledLink color="inherit" variant="body2">
                Pamiętasz hasło?
              </StyledLink>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default PassRecovery;
