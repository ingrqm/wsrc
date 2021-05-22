import { useRouter } from 'next/router';

import { useState } from 'react';
import { useMutation } from 'react-query';

import { translate } from 'base/i18n';

import axios from 'axios';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import * as yup from 'yup';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import { Autocomplete } from '@material-ui/lab';

import { Mail, LockOpen, Call, Face } from '@material-ui/icons';

import { appUrls } from 'urls';

import { FormHelperText } from '@components';

import { ageList, continentList, countryList, regionList, languageList } from './SignUp.data';
import { StyledFlag, StyledPrefix } from './SignUp.styled';

const input = {
  continent: 'continent',
  country: 'country',
  region: 'region',
  crew: 'crew',
  language: 'language',
  name: 'name',
  surname: 'surname',
  age: 'age',
  phone: 'phone',
  email: 'email',
  password: 'password',
  replyPassword: 'replyPassword',
  statute: 'statute',
};

const validationSchema = yup.object({
  [input.continent]: yup.string().required('required'),
  [input.country]: yup.string().required('required'),
  [input.region]: yup.string().required('required'),
  [input.crew]: yup.string().required('required'),
  [input.language]: yup.string().required('required'),
  [input.name]: yup.string().required('required'),
  [input.surname]: yup.string().required('required'),
  [input.age]: yup.string().required('required'),
  [input.phone]: yup.string().required('required'),
  [input.email]: yup.string().required('required'),
  [input.password]: yup.string().required('required'),
  [input.replyPassword]: yup.string().required('required'),
  [input.statute]: yup.bool().oneOf([true], 'The terms and conditions must be accepted.'),
});

const recoveryPassword = async (values) => {
  const request = await axios.post(`https://jsonplaceholder.typicode.com/posts`, { ...values });

  if (request) {
    return request.data;
  } else {
    return request;
  }
};

const SignUpForm = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [phonePrefix, setPhonePrefix] = useState('');
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const { isLoading, mutate } = useMutation(recoveryPassword, {
    onError: () => {
      enqueueSnackbar(translate('form.passRecovery.messages.failed'), { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar(translate('form.passRecovery.messages.success'), { variant: 'success' });
      setTimeout(() => {
        router.push(appUrls.portal.signIn);
      }, 1000);
    },
  });

  const formik = useFormik({
    initialValues: {
      [input.continent]: '',
      [input.country]: '',
      [input.region]: '',
      [input.crew]: '',
      [input.language]: '',
      [input.name]: '',
      [input.surname]: '',
      [input.age]: '',
      [input.phone]: '',
      [input.email]: '',
      [input.password]: '',
      [input.replyPassword]: '',
      [input.statute]: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const handleChangeContinent = (_, continent) => {
    const list = continent ? countryList[continent] : [];

    formik.setValues({ [input.continent]: continent || '' });

    setCountries(list);
    setRegions([]);
    setPhonePrefix('');
  };

  const handleChangeCountry = (_, country) => {
    const list = country && regionList[country.code] ? regionList[country.code] : [];
    const prefix = country ? country.phone : '';

    formik.setValues({ [input.country]: country || '' });

    setRegions(list);
    setPhonePrefix(prefix);
  };

  const handleRegionChange = (_, region) => {
    formik.setValues({ [input.region]: region || '' });
  };

  const handleAgeChange = (_, age) => {
    formik.setValues({ [input.age]: age || '' });
  };

  console.log(formik.values);

  return (
    <Card>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid justify="center" container>
            <Grid xs={12} item>
              <Box my={2}>
                <Typography align="center">rejestracja</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <Box mt={-2}>
                <FormControl fullWidth>
                  <Autocomplete
                    onChange={handleChangeContinent}
                    options={continentList}
                    renderInput={(params) => (
                      <TextField
                        disabled={isLoading}
                        error={formik.touched.continent && Boolean(formik.errors.continent)}
                        label="kontynent"
                        margin="normal"
                        {...params}
                      />
                    )}
                  />
                  <FormHelperText error={formik.touched.continent && Boolean(formik.errors.continent)}>
                    {formik.touched.continent && formik.errors.continent}
                  </FormHelperText>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          {countries.length > 0 && (
            <Grid justify="center" container>
              <Grid xs={10} item>
                <Box mt={-2}>
                  <FormControl fullWidth>
                    <Autocomplete
                      getOptionLabel={(option) => option.native}
                      onChange={handleChangeCountry}
                      options={countries}
                      renderInput={(params) => (
                        <TextField
                          disabled={isLoading}
                          error={formik.touched.country && Boolean(formik.errors.country)}
                          label="kraj"
                          margin="normal"
                          {...params}
                        />
                      )}
                      renderOption={(option) => (
                        <>
                          <StyledFlag code={option.code} />
                          {option.native}
                        </>
                      )}
                    />
                    <FormHelperText error={formik.touched.country && Boolean(formik.errors.country)}>
                      {formik.touched.country && formik.errors.country}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          )}
          {regions.length > 0 && (
            <Grid justify="center" container>
              <Grid xs={10} item>
                <Box mt={-2}>
                  <FormControl fullWidth>
                    <Autocomplete
                      onChange={handleRegionChange}
                      options={regions}
                      renderInput={(params) => (
                        <TextField
                          disabled={isLoading}
                          error={formik.touched.region && Boolean(formik.errors.region)}
                          label="region"
                          margin="normal"
                          {...params}
                        />
                      )}
                    />
                    <FormHelperText error={formik.touched.region && Boolean(formik.errors.region)}>
                      {formik.touched.region && formik.errors.region}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          )}
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>nazwa ekipy</InputLabel>
                <Input
                  disabled={isLoading}
                  error={formik.touched.crew && Boolean(formik.errors.crew)}
                  name={input.crew}
                  onChange={formik.handleChange}
                  value={formik.values.crew}
                />
                <FormHelperText error={formik.touched.crew && Boolean(formik.errors.crew)}>
                  {formik.touched.crew && formik.errors.crew}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <Box mt={-2}>
                <FormControl fullWidth>
                  <Autocomplete
                    getOptionLabel={(option) => option.name}
                    onChange={handleAgeChange}
                    options={languageList}
                    renderInput={(params) => (
                      <TextField
                        disabled={isLoading}
                        error={formik.touched.language && Boolean(formik.errors.language)}
                        label="język zawodów"
                        margin="normal"
                        {...params}
                      />
                    )}
                    renderOption={(option) => (
                      <>
                        <StyledFlag code={option.flag} />
                        {option.name}
                      </>
                    )}
                  />
                  <FormHelperText error={formik.touched.language && Boolean(formik.errors.language)}>
                    {formik.touched.language && formik.errors.language}
                  </FormHelperText>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={5} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>imię</InputLabel>
                <Input
                  disabled={isLoading}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  name={input.name}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <FormHelperText error={formik.touched.name && Boolean(formik.errors.name)}>
                  {formik.touched.name && formik.errors.name}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={5} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>nazwisko</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <Face />
                    </InputAdornment>
                  }
                  error={formik.touched.surname && Boolean(formik.errors.surname)}
                  name={input.surname}
                  onChange={formik.handleChange}
                  value={formik.values.surname}
                />
                <FormHelperText error={formik.touched.surname && Boolean(formik.errors.surname)}>
                  {formik.touched.surname && formik.errors.surname}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={3} item>
              <Box mt={-2}>
                <FormControl fullWidth>
                  <Autocomplete
                    disabled={isLoading}
                    error={formik.touched.age && Boolean(formik.errors.age)}
                    name={input.age}
                    onChange={formik.handleChange}
                    options={ageList}
                    renderInput={(params) => (
                      <TextField
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        label="wiek"
                        margin="normal"
                        {...params}
                      />
                    )}
                    value={formik.values.age}
                  />
                  <FormHelperText error={formik.touched.age && Boolean(formik.errors.age)}>
                    {formik.touched.age && formik.errors.age}
                  </FormHelperText>
                </FormControl>
              </Box>
            </Grid>
            <Grid xs={7} item>
              <FormControl mt={0} fullWidth>
                <InputLabel error={formik.touched.phone && Boolean(formik.errors.phone)}>numer telefonu</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <Call />
                    </InputAdornment>
                  }
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  name={input.phone}
                  onChange={formik.handleChange}
                  startAdornment={
                    <InputAdornment>
                      <StyledPrefix>+{phonePrefix}</StyledPrefix>
                    </InputAdornment>
                  }
                  value={formik.values.phone}
                />
                <FormHelperText error={formik.touched.phone && Boolean(formik.errors.phone)}>
                  {formik.touched.phone && formik.errors.phone}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>adres e-mail</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <Mail />
                    </InputAdornment>
                  }
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  name={input.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormHelperText error={formik.touched.email && Boolean(formik.errors.email)}>
                  {formik.touched.email && formik.errors.email}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>hasło</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <LockOpen />
                    </InputAdornment>
                  }
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  name={input.password}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                <FormHelperText error={formik.touched.password && Boolean(formik.errors.password)}>
                  {formik.touched.password && formik.errors.password}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>powtórz hasło</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <LockOpen />
                    </InputAdornment>
                  }
                  error={formik.touched.replyPassword && Boolean(formik.errors.replyPassword)}
                  name={input.replyPassword}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.replyPassword}
                />
                <FormHelperText error={formik.touched.replyPassword && Boolean(formik.errors.replyPassword)}>
                  {formik.touched.replyPassword && formik.errors.replyPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                disabled={isLoading}
                error={formik.touched.statute && Boolean(formik.errors.statute)}
                label="zaakceptuj regulamin"
                name={input.statute}
                onChange={formik.handleChange}
                value={formik.values.statute}
              />
              <FormHelperText error={formik.touched.statute && Boolean(formik.errors.statute)}>
                {formik.touched.statute && formik.errors.statute}
              </FormHelperText>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid justify="center" container>
            <Box mb={2}>
              <Button color="primary" type="submit" variant="contained">
                zarejestruj się
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default SignUpForm;
