import React from 'react';
import { useMutation } from 'react-query';

import { translate } from 'base/i18n';

import { FormHelperText } from '@components';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { appUrls } from 'urls';
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
  const request = await axios.post(`https://jsonplaceholder.typicode.com/posts`, { ...values });

  if (request) {
    return request.data;
  } else {
    return request;
  }
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
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <CardContent>
          <Grid justify="center" container>
            <Grid item xs={12}>
              <Box my={2}>
                <Typography align="center">{translate('form.passRecovery.title')}</Typography>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>
                  {translate('form.passRecovery.input.email.label')}
                </InputLabel>
                <Input
                  name={input.email}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  onChange={formik.handleChange}
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment>
                      <Mail />
                    </InputAdornment>
                  }
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
              <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
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
