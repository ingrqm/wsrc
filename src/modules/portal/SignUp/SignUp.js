import Link from 'next/link';

import React from 'react';

import { Container, Grid, Link as StyledLink, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { SignUp as SignUpForm } from '@forms';

import { StyledMain } from './SignUp.styled';

const SignUp = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <SignUpForm />
      <Grid alignItems="center" justify="space-between" container>
        <Grid item>
          <Box color="dark.contrastText" mt={2}>
            <Link href={appUrls.portal.signIn}>
              <StyledLink color="inherit" variant="body2">
                Masz już swoje konto?
              </StyledLink>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default SignUp;
