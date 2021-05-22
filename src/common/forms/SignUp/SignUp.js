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

const regex = {
  special: /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,}$/,
};

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
  [input.continent]: yup.string().required(translate('form.signUp.input.continent.validation.required')),
  [input.country]: yup.string().required(translate('form.signUp.input.country.validation.required')),
  [input.region]: yup.string().required(translate('form.signUp.input.region.validation.required')),
  [input.crew]: yup
    .string()
    .min(2, translate('form.signUp.input.crew.validation.required'))
    .required(translate('form.signUp.input.crew.validation.required')),
  [input.language]: yup.string().required(translate('form.signUp.input.language.validation.required')),
  [input.name]: yup
    .string()
    .min(2, translate('form.signUp.input.name.validation.required'))
    .required(translate('form.signUp.input.name.validation.required')),
  [input.surname]: yup
    .string()
    .min(2, translate('form.signUp.input.surname.validation.min'))
    .required(translate('form.signUp.input.surname.validation.required')),
  [input.age]: yup.string().required(translate('form.signUp.input.age.validation.required')),
  [input.phone]: yup.string().required(translate('form.signUp.input.phone.validation.required')),
  [input.email]: yup
    .string()
    .email(translate('form.signUp.input.email.validation.email'))
    .required(translate('form.signUp.input.email.validation.required')),
  [input.password]: yup
    .string()
    .min(5, translate('form.signUp.input.password.validation.min'))
    .matches(regex.special, translate('form.signUp.input.password.validation.specialCharacter'))
    .required(translate('form.signUp.input.password.validation.required')),
  [input.replyPassword]: yup
    .string()
    .min(5, translate('form.signUp.input.replyPassword.validation.min'))
    .matches(regex.special, translate('form.signUp.input.password.validation.specialCharacter'))
    .required(translate('form.signUp.input.replyPassword.validation.required'))
    .oneOf([yup.ref('password'), null], translate('form.signUp.input.replyPassword.validation.match')),
  [input.statute]: yup.bool().oneOf([true], translate('form.signUp.input.statute.validation.required')),
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
      enqueueSnackbar(translate('form.signUp.messages.failed'), { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar(translate('form.signUp.messages.success'), { variant: 'success' });
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

    formik.setFieldValue(input.continent, continent || '');

    setCountries(list);
    setRegions([]);
    setPhonePrefix('');
  };

  const handleChangeCountry = (_, country) => {
    const list = country && regionList[country.code] ? regionList[country.code] : [];
    const prefix = country ? country.phone : '';

    formik.setFieldValue(input.country, country ? country.name : '');

    setRegions(list);
    setPhonePrefix(prefix);
  };

  const handleRegionChange = (_, region) => {
    formik.setFieldValue(input.region, region || '');
  };

  const handleLanguageChange = (_, language) => {
    formik.setFieldValue(input.language, language ? language.name : '');
  };

  const handleAgeChange = (_, age) => {
    formik.setFieldValue(input.age, age || '');
  };

  console.log(formik.values);

  return (
    <Card>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid justify="center" container>
            <Grid xs={12} item>
              <Box my={2}>
                <Typography align="center">{translate('form.signUp.title')}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <Box mt={-2}>
                <FormControl fullWidth>
                  <Autocomplete
                    disabled={isLoading}
                    onChange={handleChangeContinent}
                    options={continentList}
                    renderInput={(params) => (
                      <TextField
                        disabled={isLoading}
                        error={formik.touched.continent && Boolean(formik.errors.continent)}
                        label={translate('form.signUp.input.continent.label')}
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
                      disabled={isLoading}
                      getOptionLabel={(option) => option.native}
                      onChange={handleChangeCountry}
                      options={countries}
                      renderInput={(params) => (
                        <TextField
                          disabled={isLoading}
                          error={formik.touched.country && Boolean(formik.errors.country)}
                          label={translate('form.signUp.input.country.label')}
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
                      disabled={isLoading}
                      onChange={handleRegionChange}
                      options={regions}
                      renderInput={(params) => (
                        <TextField
                          disabled={isLoading}
                          error={formik.touched.region && Boolean(formik.errors.region)}
                          label={translate('form.signUp.input.region.label')}
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
                <InputLabel error={formik.touched.crew && Boolean(formik.errors.crew)}>
                  {translate('form.signUp.input.crew.label')}
                </InputLabel>
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
                    disabled={isLoading}
                    getOptionLabel={(option) => option.name}
                    onChange={handleLanguageChange}
                    options={languageList}
                    renderInput={(params) => (
                      <TextField
                        disabled={isLoading}
                        error={formik.touched.language && Boolean(formik.errors.language)}
                        label={translate('form.signUp.input.language.label')}
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
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.name && Boolean(formik.errors.name)}>
                  {translate('form.signUp.input.name.label')}
                </InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <Face />
                    </InputAdornment>
                  }
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
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.surname && Boolean(formik.errors.surname)}>
                  {translate('form.signUp.input.surname.label')}
                </InputLabel>
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
            <Grid xs={10} item>
              <Box mt={-2}>
                <FormControl fullWidth>
                  <Autocomplete
                    disabled={isLoading}
                    onChange={handleAgeChange}
                    options={ageList}
                    renderInput={(params) => (
                      <TextField
                        disabled={isLoading}
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        label={translate('form.signUp.input.age.label')}
                        margin="normal"
                        {...params}
                      />
                    )}
                  />
                  <FormHelperText error={formik.touched.age && Boolean(formik.errors.age)}>
                    {formik.touched.age && formik.errors.age}
                  </FormHelperText>
                </FormControl>
              </Box>
            </Grid>
            <Grid xs={10} item>
              <FormControl mt={0} fullWidth>
                <InputLabel error={formik.touched.phone && Boolean(formik.errors.phone)}>
                  {translate('form.signUp.input.phone.label')}
                </InputLabel>
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
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>
                  {translate('form.signUp.input.email.label')}
                </InputLabel>
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
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>
                  {translate('form.signUp.input.password.label')}
                </InputLabel>
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
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>
                  {translate('form.signUp.input.replyPassword.label')}
                </InputLabel>
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
                label={translate('form.signUp.input.statute.label')}
                name={input.statute}
                onChange={formik.handleChange}
              />
              <Box mt={-1.5}>
                <FormHelperText error={formik.touched.statute && Boolean(formik.errors.statute)}>
                  {formik.touched.statute && formik.errors.statute}
                </FormHelperText>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid justify="center" container>
            <Box mb={2}>
              <Button color="primary" type="submit" variant="contained">
                {translate('form.signUp.button.label')}
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default SignUpForm;
