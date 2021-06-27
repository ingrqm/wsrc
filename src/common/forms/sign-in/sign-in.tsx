import { useRouter } from 'next/router';

import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { sliceActions } from '@redux/user/slice';

import { AccountSignInRes } from '@contracts/account';

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
} from '@material-ui/core';
import { Mail, LockOpen } from '@material-ui/icons';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import { FormHelperText } from '@components';

import { FormInputs } from './sign-in.enum';

import { fetchAccountActivation, fetchSigIn } from './sign-in.api';

import { initialValues, validationSchema } from './sign-in.schema';

const SignInForm: FC = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { key } = router.query;

  const { isLoading, mutate: mutateSignIn } = useMutation(fetchSigIn, {
    onError: () => {
      enqueueSnackbar(t('form.signIn.messages.failed'), { variant: 'error' });
    },
    onSuccess: ({ data }: AccountSignInRes) => {
      enqueueSnackbar(t('form.signIn.messages.success'), { variant: 'success' });

      dispatch(sliceActions.signInSuccess(data));
      router.push(appUrls.app.dashboard);
    },
  });

  const { mutate: mutateAccountActivation } = useMutation(fetchAccountActivation, {
    onError: () => {
      enqueueSnackbar(t('page.signIn.messages.failed'), { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar(t('page.signIn.messages.success'), { variant: 'success' });
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      mutateSignIn(values);
    },
  });

  const isError = (field: FormInputs): boolean => !!(formik.touched[field] && Boolean(formik.errors[field]));

  const errorMessage = (field: FormInputs): string | undefined =>
    formik.touched[field] && formik.errors[field] ? formik.errors[field] : '';

  useEffect(() => {
    if (key) {
      mutateAccountActivation({ token: String(key) });
    }
  }, [key]);

  return (
    <Card>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid justify='center' container>
            <Grid xs={12} item>
              <Box my={2}>
                <Typography align='center'>{t('form.signIn.title')}</Typography>
              </Box>
            </Grid>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.email && Boolean(formik.errors.email)}>
                  {t('form.signIn.input.email.label')}
                </InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment component='div' position='end'>
                      <Mail />
                    </InputAdornment>
                  }
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  name={FormInputs.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <FormHelperText error={isError(FormInputs.email)}>{errorMessage(FormInputs.email)}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid justify='center' container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={formik.touched.password && Boolean(formik.errors.password)}>
                  {t('form.signIn.input.password.label')}
                </InputLabel>
                <Input
                  disabled={isLoading}
                  endAdornment={
                    <InputAdornment component='div' position='end'>
                      <LockOpen />
                    </InputAdornment>
                  }
                  error={formik.touched.password && Boolean(formik.errors.password)}
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
        </CardContent>
        <CardActions>
          <Grid justify='center' container>
            <Box mb={2}>
              <Button color='primary' type='submit' variant='contained'>
                {t('form.signIn.button.label')}
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default SignInForm;
