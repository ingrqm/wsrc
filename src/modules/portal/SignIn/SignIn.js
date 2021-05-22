import React from 'react';

import { Container, Grid, Link as StyledLink, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Link } from '@components';

import { SignIn as SignInForm } from '@forms';

import { StyledMain } from './SignIn.styled';

const SignIn = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <SignInForm />
      <Grid alignItems="center" justify="space-between" container>
        <Grid item>
          <Box color="dark.contrastText" mt={2}>
            <Link href={appUrls.portal.passRecovery}>
              <StyledLink color="inherit" variant="body2">
                Zapomniałeś hasła?
              </StyledLink>
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Box color="dark.contrastText" mt={2}>
            <Link href={appUrls.portal.signUp}>Nie masz konta?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default SignIn;
