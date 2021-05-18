import React, { useState } from 'react';

import { Alert } from '@components';
import { appUrls } from 'urls';

import {
  Card,
  CardActions,
  CardContent,
  Container,
  Button,
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  Typography,
  Link,
  Box,
} from '@material-ui/core';
import { Mail, LockOpen } from '@material-ui/icons';

import { StyledMain } from './SignIn.styled';

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const signIn = () => {
    setIsOpen(true);
  };

  return (
    <StyledMain bgcolor="dark.main">
      <Container maxWidth="xs">
        <Card>
          <CardContent>
            <Grid justify="center" container>
              <Grid item xs={true}>
                <Box my={2}>
                  <Typography align="center">logowanie</Typography>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Box mb={2}>
                  <FormControl fullWidth>
                    <InputLabel>Adres e-mail</InputLabel>
                    <Input
                      endAdornment={
                        <InputAdornment>
                          <Mail />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Grid justify="center" container>
              <Grid item xs={10}>
                <Box mb={2}>
                  <FormControl fullWidth>
                    <InputLabel>Hasło</InputLabel>
                    <Input
                      endAdornment={
                        <InputAdornment>
                          <LockOpen />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid justify="center" container>
              <Box mb={2}>
                <Button variant="contained" color="primary" onClick={signIn}>
                  Zaloguj się
                </Button>
              </Box>
            </Grid>
          </CardActions>
        </Card>
        <Grid alignItems="center" justify="space-between" container>
          <Grid item>
            <Box mt={2} color="dark.contrastText">
              <Link href={appUrls.portal.passRecovery} color="inherit" variant="body2">
                Zapomniałeś hasła?
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={2} color="dark.contrastText">
              <Link href={appUrls.portal.signUp} color="inherit" variant="body2">
                Nie masz konta?
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Alert open={isOpen} onClose={setIsOpen} type="success" message="This is a success message!" />
    </StyledMain>
  );
};

export default SignIn;
