import React from 'react';

import { Container, Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Link } from '@components';

import { SignUp as SignUpForm } from '@forms';

import { StyledMain } from './SignUp.styled';

const SignUp = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <SignUpForm />
      <Grid alignItems="center" justify="space-between" container>
        <Grid item>
          <Box color="dark.contrastText" mt={2}>
            <Link href={appUrls.portal.signIn}>Masz już swoje konto?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default SignUp;
