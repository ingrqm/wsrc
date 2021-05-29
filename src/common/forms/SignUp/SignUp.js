import { useRouter } from 'next/router';

import { useState } from 'react';
import { useMutation } from 'react-query';

import { request } from 'base/api';
import { translate } from 'base/i18n';

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

import { appUrls, apiUrls } from 'urls';

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
  [input.crew]: yup.string(),
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
    .matches(regex.special, {
      message: translate('form.signUp.input.password.validation.specialCharacter'),
    })
    .required(translate('form.signUp.input.password.validation.required')),
  [input.replyPassword]: yup
    .string()
    .min(5, translate('form.signUp.input.replyPassword.validation.min'))
    .matches(regex.special, {
      message: translate('form.signUp.input.password.validation.specialCharacter'),
    })
    .required(translate('form.signUp.input.replyPassword.validation.required'))
    .oneOf([yup.ref('password'), null], translate('form.signUp.input.replyPassword.validation.match')),
  [input.statute]: yup.bool().oneOf([true], translate('form.signUp.input.statute.validation.required')),
});

const passwordRecovery = async (values) => {
  return request(process.env.NEXT_PUBLIC_API_URL, 'POST', apiUrls.portal.signUp, values);
};

const SignUpForm = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [phonePrefix, setPhonePrefix] = useState('');
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const { isLoading, mutate } = useMutation(passwordRecovery, {
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
      const payload = {
        [input.continent]: values[input.continent],
        [input.country]: values[input.country],
        [input.region]: values[input.region],
        [input.crew]: values[input.crew],
        [input.language]: values[input.language],
        [input.name]: values[input.name],
        [input.surname]: values[input.surname],
        [input.age]: values[input.age],
        [input.phone]: `+${phonePrefix} ${values[input.phone]}`,
        [input.email]: values[input.email],
        [input.password]: values[input.password],
      };

      mutate(payload);
    },
  });

  const error = (field) => {
    return formik.touched[field] && Boolean(formik.errors[field]) ? true : undefined;
  };
  const isError = (field) => {
    return formik.touched[field] && Boolean(formik.errors[field]) ? true : false;
  };

  const errorMessage = (field) => {
    return formik.touched[field] && formik.errors[field] ? formik.errors[field] : '';
  };

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
    formik.setFieldValue(input.language, language ? language.code : '');
  };

  const handleAgeChange = (_, age) => {
    formik.setFieldValue(input.age, age || '');
  };

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
                        error={isError(input.continent)}
                        label={translate('form.signUp.input.continent.label')}
                        margin="normal"
                        {...params}
                      />
                    )}
                  />
                  <FormHelperText error={isError(input.continent)}>{errorMessage(input.continent)}</FormHelperText>
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
                          error={isError(input.country)}
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
                    <FormHelperText error={isError(input.country)}>{errorMessage(input.country)}</FormHelperText>
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
                          error={isError(input.region)}
                          label={translate('form.signUp.input.region.label')}
                          margin="normal"
                          {...params}
                        />
                      )}
                    />
                    <FormHelperText error={isError(input.region)}>{errorMessage(input.region)}</FormHelperText>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          )}
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(input.crew)}>{translate('form.signUp.input.crew.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  error={isError(input.crew)}
                  name={input.crew}
                  onChange={formik.handleChange}
                  value={formik.values.crew}
                />
                <FormHelperText error={isError(input.crew)}>{errorMessage(input.crew)}</FormHelperText>
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
                        error={isError(input.language)}
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
                  <FormHelperText error={isError(input.language)}>{errorMessage(input.language)}</FormHelperText>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(input.name)}>{translate('form.signUp.input.name.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <Face />
                    </InputAdornment>
                  }
                  error={isError(input.name)}
                  name={input.name}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <FormHelperText error={isError(input.name)}>{errorMessage(input.name)}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(input.surname)}>{translate('form.signUp.input.surname.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <Face />
                    </InputAdornment>
                  }
                  error={isError(input.surname)}
                  name={input.surname}
                  onChange={formik.handleChange}
                  value={formik.values.surname}
                />
                <FormHelperText error={isError(input.surname)}>{errorMessage(input.surname)}</FormHelperText>
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
                        error={isError(input.age)}
                        label={translate('form.signUp.input.age.label')}
                        margin="normal"
                        {...params}
                      />
                    )}
                  />
                  <FormHelperText error={isError(input.age)}>{errorMessage(input.age)}</FormHelperText>
                </FormControl>
              </Box>
            </Grid>
            <Grid xs={10} item>
              <FormControl mt={0} fullWidth>
                <InputLabel error={isError(input.phone)}>{translate('form.signUp.input.phone.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <Call />
                    </InputAdornment>
                  }
                  error={isError(input.phone)}
                  name={input.phone}
                  onChange={formik.handleChange}
                  startAdornment={
                    <InputAdornment>
                      <StyledPrefix>+{phonePrefix}</StyledPrefix>
                    </InputAdornment>
                  }
                  value={formik.values.phone}
                />
                <FormHelperText error={isError(input.phone)}>{errorMessage(input.phone)}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(input.email)}>{translate('form.signUp.input.email.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <Mail />
                    </InputAdornment>
                  }
                  error={isError(input.email)}
                  name={input.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormHelperText error={isError(input.email)}>{errorMessage(input.email)}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(input.password)}>{translate('form.signUp.input.password.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <LockOpen />
                    </InputAdornment>
                  }
                  error={isError(input.password)}
                  name={input.password}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                <FormHelperText error={isError(input.password)}>{errorMessage(input.password)}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(input.replyPassword)}>
                  {translate('form.signUp.input.replyPassword.label')}
                </InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <LockOpen />
                    </InputAdornment>
                  }
                  error={isError(input.replyPassword)}
                  name={input.replyPassword}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.replyPassword}
                />
                <FormHelperText error={isError(input.replyPassword)}>
                  {errorMessage(input.replyPassword)}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                disabled={isLoading}
                error={error(input.statute)}
                label={translate('form.signUp.input.statute.label')}
                name={input.statute}
                onChange={formik.handleChange}
              />
              <Box mt={-1.5}>
                <FormHelperText error={isError(input.statute)}>{errorMessage(input.statute)}</FormHelperText>
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
