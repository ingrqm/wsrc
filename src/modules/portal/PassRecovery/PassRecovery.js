import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Alert } from '@components';
import axios from 'axios';
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
import { Mail } from '@material-ui/icons';

import { StyledMain } from './PassRecovery.styled';

const PassRecovery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, error, data } = useQuery('fetchLuke', () => axios('http://swapi.dev/api/people/1/'));

  const signIn = () => {
    setIsOpen(true);
  };

  console.log(isLoading, error, data);

  return (
    <StyledMain bgcolor="dark.main">
      <Container maxWidth="xs">
        <Card>
          <CardContent>
            <Grid justify="center" container>
              <Grid item xs={true}>
                <Box my={2}>
                  <Typography align="center">odzyskiwanie hasła</Typography>
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
          </CardContent>
          <CardActions>
            <Grid justify="center" container>
              <Box mb={2}>
                <Button variant="contained" color="primary" onClick={signIn}>
                  przypomnij hasło
                </Button>
              </Box>
            </Grid>
          </CardActions>
        </Card>
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
      <Alert open={isOpen} onClose={setIsOpen} type="success" message="This is a success message!" />
    </StyledMain>
  );
};

export default PassRecovery;
