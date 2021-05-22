import React from 'react';

import { translate } from 'base/i18n';

import { FormHelperText } from '@components';
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
  6;
  return (
    <Card>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <CardContent>
          <Grid justify="center" container>
            <Grid item xs={12}>
              <Box my={2}>
                <Typography align="center">{translate('form.signIn.title')}</Typography>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>
                  {translate('form.signIn.input.email.label')}
                </InputLabel>
                <Input
                  name={input.email}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  onChange={formik.handleChange}
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
          <Grid justify="center" container>
            <Grid item xs={10}>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.password && Boolean(formik.errors.password)}>
                  {translate('form.signIn.input.password.label')}
                </InputLabel>
                <Input
                  name={input.password}
                  type="password"
                  value={formik.values.password}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  onChange={formik.handleChange}
                  endAdornment={
                    <InputAdornment>
                      <LockOpen />
                    </InputAdornment>
                  }
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
              <Button type="submit" variant="contained" color="primary">
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
