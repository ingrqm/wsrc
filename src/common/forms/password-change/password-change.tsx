import { useRouter } from 'next/router';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';

import { Align, AlignFlex } from '@enums/align';

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
import { LockOpen } from '@material-ui/icons';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import { FormHelperText } from '@components';

import { FormInputs } from './password-change.enum';

import { fetchPasswordChange } from './password-change.api';

import { initialValues, validationSchema } from './password-change.schema';

const PasswordChangeForm: FC = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const { key } = router.query;

  const { isLoading, mutate: mutateChangePassword } = useMutation(fetchPasswordChange, {
    onError: () => {
      enqueueSnackbar(t('form.passwordChange.messages.failed'), { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar(t('form.passwordChange.messages.success'), { variant: 'success' });
      setTimeout(() => {
        router.push(appUrls.portal.signIn);
      }, 1000);
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ password }) => {
      const payload = {
        token: String(key),
        password,
      };

      mutateChangePassword(payload);
    },
  });

  const isError = (field: FormInputs): boolean => !!(formik.touched[field] && Boolean(formik.errors[field]));

  const errorMessage = (field: FormInputs): string | undefined =>
    formik.touched[field] && formik.errors[field] ? formik.errors[field] : '';

  return (
    <Card>
      <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={12} item>
              <Box my={2}>
                <Typography align={Align.center}>{t('form.passwordChange.title')}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid justify={AlignFlex.center} container>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(FormInputs.password)}>
                  {t('form.passwordChange.input.password.label')}
                </InputLabel>
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
                  {t('form.passwordChange.input.replyPassword.label')}
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
        </CardContent>
        <CardActions>
          <Grid justify={AlignFlex.center} container>
            <Box mb={2}>
              <Button color='primary' disabled={isLoading} type='submit' variant='contained'>
                {t('form.passwordChange.button.label')}
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default PasswordChangeForm;
