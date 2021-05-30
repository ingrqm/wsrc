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

import { LockOpen } from '@material-ui/icons';

import { appUrls, apiUrls } from 'urls';

import { FormHelperText } from '@components';

const regex = {
  special: /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,}$/,
};

const input = {
  password: 'password',
  replyPassword: 'replyPassword',
};

const validationSchema = yup.object({
  [input.password]: yup
    .string()
    .min(5, translate('form.passwordChange.input.password.validation.min'))
    .matches(regex.special, {
      message: translate('form.passwordChange.input.password.validation.specialCharacter'),
    })
    .required(translate('form.passwordChange.input.password.validation.required')),
  [input.replyPassword]: yup
    .string()
    .min(5, translate('form.passwordChange.input.replyPassword.validation.min'))
    .matches(regex.special, {
      message: translate('form.passwordChange.input.password.validation.specialCharacter'),
    })
    .required(translate('form.passwordChange.input.replyPassword.validation.required'))
    .oneOf([yup.ref('password'), null], translate('form.passwordChange.input.replyPassword.validation.match')),
});

const passwordChange = async (values) => {
  return request(process.env.NEXT_PUBLIC_API_URL, 'PATCH', apiUrls.portal.passwordChange, values);
};

const PasswordChangeForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { key } = router.query;

  const { isLoading, mutate: mutateChangePassword } = useMutation(passwordChange, {
    onError: () => {
      enqueueSnackbar(translate('form.passwordChange.messages.failed'), { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar(translate('form.passwordChange.messages.success'), { variant: 'success' });
      setTimeout(() => {
        router.push(appUrls.portal.signIn);
      }, 1000);
    },
  });

  const formik = useFormik({
    initialValues: {
      [input.password]: '',
      [input.replyPassword]: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ password }) => {
      const payload = {
        token: key,
        password: password,
      };

      mutateChangePassword(payload);
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
                <Typography align="center">{translate('form.passwordChange.title')}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid justify="center" container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(input.password)}>
                  {translate('form.passwordChange.input.password.label')}
                </InputLabel>
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
                  {translate('form.passwordChange.input.replyPassword.label')}
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
        </CardContent>
        <CardActions>
          <Grid justify="center" container>
            <Box mb={2}>
              <Button color="primary" disabled={isLoading} type="submit" variant="contained">
                {translate('form.passwordChange.button.label')}
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default PasswordChangeForm;
