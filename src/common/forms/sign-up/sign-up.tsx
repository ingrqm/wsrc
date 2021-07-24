import { useRouter } from 'next/router';

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';

import { AlignFlex } from '@enums/align';

import { appUrls } from 'urls';

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
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Mail, LockOpen, Call, Face } from '@material-ui/icons';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import { Autocomplete, FormHelperText } from '@components';

import { ageList, continentList, countryList, regionList, languageList } from './sign-up.data';
import { FormInputs } from './sign-up.enum';

import { fetchSignUp } from './sign-up.api';

import { initialValues, validationSchema } from './sign-up.schema';

import { CountryTypes, FormTypes, LanguageTypes } from './sign-up.types';

import { StyledFlag, StyledPrefix } from './sign-up.styled';

const SignUpForm: FC = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [phonePrefix, setPhonePrefix] = useState('');
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const { isLoading, mutate } = useMutation(fetchSignUp, {
    onError: () => {
      enqueueSnackbar(t('form.signUp.messages.failed'), { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar(t('form.signUp.messages.success'), { variant: 'success' });
      setTimeout(() => {
        router.push(appUrls.portal.signIn);
      }, 1000);
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: FormTypes) => {
      const payload = {
        continent: values[FormInputs.continent],
        country: values[FormInputs.country],
        region: values[FormInputs.region],
        crew: values[FormInputs.crew],
        language: values[FormInputs.language],
        name: values[FormInputs.name],
        surname: values[FormInputs.surname],
        age: values[FormInputs.age],
        phone: `+${phonePrefix} ${values[FormInputs.phone]}`,
        email: values[FormInputs.email],
        password: values[FormInputs.password],
      };

      mutate(payload);
    },
  });

  const isError = (field: FormInputs): boolean => !!(formik.touched[field] && Boolean(formik.errors[field]));

  const errorMessage = (field: FormInputs): string | undefined =>
    formik.touched[field] && formik.errors[field] ? formik.errors[field] : '';

  const handleChangeContinent = (_, continent: string): void => {
    const list = continent ? countryList[continent] : [];

    formik.setFieldValue(FormInputs.continent, continent || '');

    setCountries(list);
    setRegions([]);
    setPhonePrefix('');
  };

  const handleChangeCountry = (_, country?: CountryTypes): void => {
    const list = (country?.code && regionList[country.code]) || [];
    const prefix = country?.phone || '';

    formik.setFieldValue(FormInputs.country, country?.name || '');

    setRegions(list);
    setPhonePrefix(prefix);
  };

  const handleRegionChange = (_, region: string): void => {
    formik.setFieldValue(FormInputs.region, region || '');
  };

  const handleLanguageChange = (_, language: LanguageTypes): void => {
    formik.setFieldValue(FormInputs.language, language ? language.code : '');
  };

  const handleAgeChange = (_, age: number): void => {
    formik.setFieldValue(FormInputs.age, age || '');
  };

  return (
    <Card>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={12} item>
              <Box my={2}>
                <Typography align='center'>{t('form.signUp.title')}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <Box mt={-2}>
                <FormControl fullWidth>
                  <Autocomplete
                    disabled={isLoading}
                    isError={isError(FormInputs.continent)}
                    label={t('form.signUp.input.continent.label')}
                    onChange={handleChangeContinent}
                    options={continentList}
                  />
                  <FormHelperText error={isError(FormInputs.continent)}>
                    {errorMessage(FormInputs.continent)}
                  </FormHelperText>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          {countries.length > 0 && (
            <Grid justify={AlignFlex.center} container>
              <Grid xs={10} item>
                <Box mt={-2}>
                  <FormControl fullWidth>
                    <Autocomplete
                      disabled={isLoading}
                      isError={isError(FormInputs.country)}
                      getOptionLabel={({ native }) => native}
                      onChange={handleChangeCountry}
                      options={countries}
                      label={t('form.signUp.input.country.label')}
                      renderOption={({ code, native }) => (
                        <>
                          <StyledFlag code={code} />
                          {native}
                        </>
                      )}
                    />
                    <FormHelperText error={isError(FormInputs.country)}>
                      {errorMessage(FormInputs.country)}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          )}
          {regions.length > 0 && (
            <Grid justify={AlignFlex.center} container>
              <Grid xs={10} item>
                <Box mt={-2}>
                  <FormControl fullWidth>
                    <Autocomplete
                      disabled={isLoading}
                      onChange={handleRegionChange}
                      options={regions}
                      isError={isError(FormInputs.region)}
                      label={t('form.signUp.input.region.label')}
                    />
                    <FormHelperText error={isError(FormInputs.region)}>
                      {errorMessage(FormInputs.region)}
                    </FormHelperText>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          )}
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(FormInputs.crew)}>{t('form.signUp.input.crew.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  error={isError(FormInputs.crew)}
                  name={FormInputs.crew}
                  onChange={formik.handleChange}
                  value={formik.values.crew}
                />
                <FormHelperText error={isError(FormInputs.crew)}>{errorMessage(FormInputs.crew)}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <Box mt={-2}>
                <FormControl fullWidth>
                  <Autocomplete
                    disabled={isLoading}
                    getOptionLabel={({ name }): string => name}
                    onChange={handleLanguageChange}
                    options={languageList}
                    isError={isError(FormInputs.language)}
                    label={t('form.signUp.input.language.label')}
                    renderOption={({ flag, name }) => (
                      <>
                        <StyledFlag code={flag} />
                        {name}
                      </>
                    )}
                  />
                  <FormHelperText error={isError(FormInputs.language)}>
                    {errorMessage(FormInputs.language)}
                  </FormHelperText>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(FormInputs.name)}>{t('form.signUp.input.name.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment component='div' position='end'>
                      <Face />
                    </InputAdornment>
                  }
                  error={isError(FormInputs.name)}
                  name={FormInputs.name}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <FormHelperText error={isError(FormInputs.name)}>{errorMessage(FormInputs.name)}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(FormInputs.surname)}>{t('form.signUp.input.surname.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment component='div' position='end'>
                      <Face />
                    </InputAdornment>
                  }
                  error={isError(FormInputs.surname)}
                  name={FormInputs.surname}
                  onChange={formik.handleChange}
                  value={formik.values.surname}
                />
                <FormHelperText error={isError(FormInputs.surname)}>{errorMessage(FormInputs.surname)}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <Box mt={-2}>
                <FormControl fullWidth>
                  <Autocomplete
                    disabled={isLoading}
                    onChange={handleAgeChange}
                    options={ageList}
                    isError={isError(FormInputs.age)}
                    label={t('form.signUp.input.age.label')}
                  />
                  <FormHelperText error={isError(FormInputs.age)}>{errorMessage(FormInputs.age)}</FormHelperText>
                </FormControl>
              </Box>
            </Grid>
            <Grid xs={10} item>
              <FormControl mt={0} fullWidth>
                <InputLabel error={isError(FormInputs.phone)}>{t('form.signUp.input.phone.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment component='div' position='end'>
                      <Call />
                    </InputAdornment>
                  }
                  error={isError(FormInputs.phone)}
                  name={FormInputs.phone}
                  onChange={formik.handleChange}
                  startAdornment={
                    <InputAdornment component='div' position='end'>
                      <StyledPrefix>+{phonePrefix}</StyledPrefix>
                    </InputAdornment>
                  }
                  value={formik.values.phone}
                />
                <FormHelperText error={isError(FormInputs.phone)}>{errorMessage(FormInputs.phone)}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(FormInputs.email)}>{t('form.signUp.input.email.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment component='div' position='end'>
                      <Mail />
                    </InputAdornment>
                  }
                  error={isError(FormInputs.email)}
                  name={FormInputs.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormHelperText error={isError(FormInputs.email)}>{errorMessage(FormInputs.email)}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(FormInputs.password)}>{t('form.signUp.input.password.label')}</InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment component='div' position='end'>
                      <LockOpen />
                    </InputAdornment>
                  }
                  error={isError(FormInputs.password)}
                  name={FormInputs.password}
                  onChange={formik.handleChange}
                  type='password'
                  value={formik.values.password}
                />
                <FormHelperText error={isError(FormInputs.password)}>
                  {errorMessage(FormInputs.password)}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(FormInputs.replyPassword)}>
                  {t('form.signUp.input.replyPassword.label')}
                </InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment component='div' position='end'>
                      <LockOpen />
                    </InputAdornment>
                  }
                  error={isError(FormInputs.replyPassword)}
                  name={FormInputs.replyPassword}
                  onChange={formik.handleChange}
                  type='password'
                  value={formik.values.replyPassword}
                />
                <FormHelperText error={isError(FormInputs.replyPassword)}>
                  {errorMessage(FormInputs.replyPassword)}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <FormControlLabel
                control={<Checkbox color='primary' />}
                disabled={isLoading}
                label={t('form.signUp.input.statute.label')}
                name={FormInputs.statute}
                onChange={formik.handleChange}
              />
              <Box mt={-1.5}>
                <FormHelperText error={isError(FormInputs.statute)}>{errorMessage(FormInputs.statute)}</FormHelperText>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid justify={AlignFlex.center} container>
            <Box mb={2}>
              <Button color='primary' type='submit' variant='contained'>
                {t('form.signUp.button.label')}
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default SignUpForm;
