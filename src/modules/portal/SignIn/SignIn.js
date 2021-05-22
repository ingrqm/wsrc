import React from 'react';

import SignInForm from '@forms/SignIn';
import Link from 'next/link';
import { appUrls } from 'urls';

import { Container, Grid, Link as StyledLink, Box } from '@material-ui/core';

import { StyledMain } from './SignIn.styled';

const SignIn = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <SignInForm />
      <Grid alignItems="center" justify="space-between" container>
        <Grid item>
          <Box mt={2} color="dark.contrastText">
            <Link href={appUrls.portal.passRecovery}>
              <StyledLink color="inherit" variant="body2">
                Zapomniałeś hasła?
              </StyledLink>
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Box mt={2} color="dark.contrastText">
            <Link href={appUrls.portal.signUp}>
              <StyledLink color="inherit" variant="body2">
                Nie masz konta?
              </StyledLink>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default SignIn;
