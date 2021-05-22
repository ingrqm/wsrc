import React from 'react';

import { translate } from 'base/i18n';

import { useFormik } from 'formik';
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

import { Mail, LockOpen } from '@material-ui/icons';

import { FormHelperText } from '@components';

const input = {
  email: 'email',
  password: 'password',
};

const validationSchema = yup.object({
  [input.email]: yup
    .string()
    .email(translate('form.signIn.input.email.validation.email'))
    .required(translate('form.signIn.input.email.validation.required')),
  [input.password]: yup
    .string()
    .min(5, translate('form.signIn.input.password.validation.min'))
    .required(translate('form.signIn.input.password.validation.required')),
});

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      [input.email]: '',
      [input.password]: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setIsOpen(true);
    },
  });

  return (
    <Card>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid justify="center" container>
            <Grid xs={12} item>
              <Box my={2}>
                <Typography align="center">{translate('form.signIn.title')}</Typography>
              </Box>
            </Grid>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>
                  {translate('form.signIn.input.email.label')}
                </InputLabel>
                <Input
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
                <InputLabel error={formik.touched.password && Boolean(formik.errors.password)}>
                  {translate('form.signIn.input.password.label')}
                </InputLabel>
                <Input
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
        </CardContent>
        <CardActions>
          <Grid justify="center" container>
            <Box mb={2}>
              <Button color="primary" type="submit" variant="contained">
                {translate('form.signIn.button.label')}
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default SignInForm;
