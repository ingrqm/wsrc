import React from 'react';

import { translate } from 'base/i18n';

import { Container, Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Link } from '@components';

import { SignIn as SignInForm } from '@forms';

import { StyledMain } from './SignIn.styled';

const SignIn = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <SignInForm />
      <Grid justify="space-between" container>
        <Grid xs={6} item>
          <Box color="dark.contrastText" mt={2}>
            <Link align="start" href={appUrls.portal.passRecovery}>
              {translate('page.signIn.actions.passRecovery')}
            </Link>
          </Box>
        </Grid>
        <Grid xs={6} item>
          <Box color="dark.contrastText" mt={2}>
            <Link align="end" href={appUrls.portal.signUp}>
              {translate('page.signIn.actions.signUp')}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default SignIn;
