import React, { useState } from 'react';

import { Alert } from '@components';
import Link from 'next/link';
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
  Link as StyledLink,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Mail, LockOpen, Call, Face } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';

import { ageList, continentList, countryList, regionList, languageList } from './SignUp.data';
import { StyledMain, StyledFlag, StyledPrefix } from './SignUp.styled';

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [phonePrefix, setPhonePrefix] = useState('');

  const handleSignIn = () => {};

  const handleChangeContinent = (_, continent) => {
    const list = continent ? countryList[continent] : [];

    setCountries(list);
    setRegions([]);
    setPhonePrefix('');
  };

  const handleChangeCountry = (_, country) => {
    const list = country && regionList[country.code] ? regionList[country.code] : [];
    const prefix = country ? country.phone : '';

    setRegions(list);
    setPhonePrefix(prefix);
  };

  return (
    <StyledMain bgcolor="dark.main">
      <Container maxWidth="xs">
        <Card>
          <CardContent>
            <Grid justify="center" container>
              <Grid item xs={12}>
                <Box my={2}>
                  <Typography align="center">rejestracja</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid justify="center" container>
              <Grid item xs={10}>
                <Box mt={-2}>
                  <FormControl fullWidth>
                    <Autocomplete
                      options={continentList}
                      onChange={handleChangeContinent}
                      renderInput={(params) => <TextField {...params} label="kontynent" margin="normal" />}
                    />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            {countries.length > 0 && (
              <Grid justify="center" container>
                <Grid item xs={10}>
                  <Box mt={-2}>
                    <FormControl fullWidth>
                      <Autocomplete
                        options={countries}
                        getOptionLabel={(option) => option.native}
                        renderOption={(option) => (
                          <React.Fragment>
                            <StyledFlag code={option.code} />
                            {option.native}
                          </React.Fragment>
                        )}
                        onChange={handleChangeCountry}
                        renderInput={(params) => <TextField {...params} label="kraj" margin="normal" />}
                      />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            )}
            {regions.length > 0 && (
              <Grid justify="center" container>
                <Grid item xs={10}>
                  <Box mt={-2}>
                    <FormControl fullWidth>
                      <Autocomplete
                        options={regions}
                        renderInput={(params) => <TextField {...params} label="region" margin="normal" />}
                      />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            )}
            <Grid justify="center" container>
              <Grid item xs={10}>
                <Box mb={2}>
                  <FormControl fullWidth>
                    <InputLabel>nazwa ekipy</InputLabel>
                    <Input />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Grid justify="center" container>
              <Grid item xs={10}>
                <Box mt={-2}>
                  <FormControl fullWidth>
                    <Autocomplete
                      options={languageList}
                      getOptionLabel={(option) => option.name}
                      renderOption={(option) => (
                        <React.Fragment>
                          <StyledFlag code={option.flag} />
                          {option.name}
                        </React.Fragment>
                      )}
                      renderInput={(params) => <TextField {...params} label="język zawodów" margin="normal" />}
                    />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Grid justify="center" container>
              <Grid item xs={5}>
                <Box mb={2}>
                  <FormControl fullWidth>
                    <InputLabel>imię</InputLabel>
                    <Input />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box mb={2}>
                  <FormControl fullWidth>
                    <InputLabel>nazwisko</InputLabel>
                    <Input
                      endAdornment={
                        <InputAdornment>
                          <Face />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Grid justify="center" container>
              <Grid item xs={3}>
                <Box mb={1} mt={-2}>
                  <FormControl fullWidth>
                    <Autocomplete
                      options={ageList}
                      renderInput={(params) => <TextField {...params} label="wiek" margin="normal" />}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={7}>
                <Box mb={1}>
                  <FormControl fullWidth mt={0}>
                    <InputLabel>numer telefonu</InputLabel>
                    <Input
                      startAdornment={
                        <InputAdornment>
                          <StyledPrefix>+{phonePrefix}</StyledPrefix>
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment>
                          <Call />
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
                    <InputLabel>adres e-mail</InputLabel>
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
                    <InputLabel>powtórz adres e-mail</InputLabel>
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
                    <InputLabel>hasło</InputLabel>
                    <Input
                      type="password"
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
            <Grid justify="center" container>
              <Grid item xs={10}>
                <Box mb={0}>
                  <FormControl fullWidth>
                    <InputLabel>powtórz hasło</InputLabel>
                    <Input
                      type="password"
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
            <Grid justify="center" container>
              <Grid item xs={10}>
                <Box mt={1} mb={0} justify="start">
                  <FormControlLabel control={<Checkbox color="primary" />} label="zaakceptuj regulamin" />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid justify="center" container>
              <Box mb={2}>
                <Button variant="contained" color="primary" onClick={handleSignIn}>
                  zarejestruj się
                </Button>
              </Box>
            </Grid>
          </CardActions>
        </Card>
        <Grid alignItems="center" justify="space-between" container>
          <Grid item>
            <Box mt={2} color="dark.contrastText">
              <Link href={appUrls.portal.signIn}>
                <StyledLink color="inherit" variant="body2">
                  Masz już swoje konto?
                </StyledLink>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Alert open={isOpen} onClose={setIsOpen} type="success" message="This is a success message!" />
    </StyledMain>
  );
};

export default SignUp;
