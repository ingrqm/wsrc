import React, { useState } from 'react';

import { Alert, FormHelperText } from '@components';
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
import { Mail } from '@material-ui/icons';

const input = {
  email: 'email',
};

const validationSchema = yup.object({
  [input.email]: yup.string().email('Enter a valid email').required('Email is required'),
});

const PassRecoveryForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      [input.email]: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setIsOpen(true);
    },
  });

  return (
    <Card>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <CardContent>
          <Grid justify="center" container>
            <Grid item xs={true}>
              <Box my={2}>
                <Typography align="center">odzyskiwanie hasła</Typography>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>Adres e-mail</InputLabel>
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
        </CardContent>
        <CardActions>
          <Grid justify="center" container>
            <Box mb={2}>
              <Button type="submit" variant="contained" color="primary">
                przypomnij hasło
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
      <Alert open={isOpen} onClose={setIsOpen} type="success" message="This is a success message!" />
    </Card>
  );
};

export default PassRecoveryForm;
