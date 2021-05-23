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
    .email(translate('form.passRecovery.input.email.validation.email'))
    .required(translate('form.passRecovery.input.email.validation.required')),
});

const recoveryPassword = async (values) => {
  return request(process.env.NEXT_PUBLIC_API_URL, 'POST', apiUrls.portal.recoveryPassword, values);
};

const PassRecoveryForm = () => {
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
      [input.email]: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <Card>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid justify="center" container>
            <Grid xs={12} item>
              <Box my={2}>
                <Typography align="center">{translate('form.passRecovery.title')}</Typography>
              </Box>
            </Grid>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>
                  {translate('form.passRecovery.input.email.label')}
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
        </CardContent>
        <CardActions>
          <Grid justify="center" container>
            <Box mb={2}>
              <Button color="primary" disabled={isLoading} type="submit" variant="contained">
                {translate('form.passRecovery.button.label')}
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default PassRecoveryForm;
