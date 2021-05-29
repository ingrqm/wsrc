import { useRouter } from 'next/router';

import React from 'react';
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
} from '@material-ui/core';

import { Mail } from '@material-ui/icons';

import { appUrls, apiUrls } from 'urls';

import { FormHelperText } from '@components';

const input = {
  email: 'email',
};

const validationSchema = yup.object({
  [input.email]: yup
    .string()
    .email(translate('form.passwordRecovery.input.email.validation.email'))
    .required(translate('form.passwordRecovery.input.email.validation.required')),
});

const passwordRecovery = async (values) => {
  return request(process.env.NEXT_PUBLIC_API_URL, 'POST', apiUrls.portal.passwordRecovery, values);
};

const PasswordRecoveryForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const { isLoading, mutate: mutateRecoveryPassword } = useMutation(passwordRecovery, {
    onError: () => {
      enqueueSnackbar(translate('form.passwordRecovery.messages.failed'), { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar(translate('form.passwordRecovery.messages.success'), { variant: 'success' });
      setTimeout(() => {
        router.push(appUrls.portal.signIn);
      }, 1000);
    },
  });

  const formik = useFormik({
    initialValues: {
      [input.email]: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutateRecoveryPassword(values);
    },
  });

  const isError = (field) => {
    return formik.touched[field] && Boolean(formik.errors[field]) ? true : false;
  };

  const errorMessage = (field) => {
    return formik.touched[field] && formik.errors[field] ? formik.errors[field] : '';
  };

  return (
    <Card>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid justify="center" container>
            <Grid xs={12} item>
              <Box my={2}>
                <Typography align="center">{translate('form.passwordRecovery.title')}</Typography>
              </Box>
            </Grid>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(input.email)}>
                  {translate('form.passwordRecovery.input.email.label')}
                </InputLabel>
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
        </CardContent>
        <CardActions>
          <Grid justify="center" container>
            <Box mb={2}>
              <Button color="primary" disabled={isLoading} type="submit" variant="contained">
                {translate('form.passwordRecovery.button.label')}
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default PasswordRecoveryForm;
