import React from 'react';

import { translate } from 'base/i18n';

import { Container, Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Link } from '@components';

import { SignUp as SignUpForm } from '@forms';

import { StyledMain } from './SignUp.styled';

const SignUp = () => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">
      <SignUpForm />
      <Grid justify="space-between" container>
        <Grid item>
          <Box color="dark.contrastText" mt={2}>
            <Link align="start" href={appUrls.portal.signIn}>
              {translate('page.signUp.actions.signIn')}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </StyledMain>
);

export default SignUp;
