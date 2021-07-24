import { useRouter } from 'next/router';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';

import { Align, AlignFlex } from '@enums/align';
import { Color } from '@enums/color';

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
import { Mail } from '@material-ui/icons';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import { FormHelperText } from '@components';

import { FormInputs } from './password-recovery.enum';

import { fetchPasswordRecovery } from './password-recovery.api';

import { initialValues, validationSchema } from './password-recovery.schema';

const PasswordRecoveryForm: FC = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const { isLoading, mutate: mutateRecoveryPassword } = useMutation(fetchPasswordRecovery, {
    onError: () => {
      enqueueSnackbar(t('form.passwordRecovery.messages.failed'), { variant: 'error' });
    },
    onSuccess: () => {
      enqueueSnackbar(t('form.passwordRecovery.messages.success'), { variant: 'success' });
      setTimeout(() => {
        router.push(appUrls.portal.signIn);
      }, 1000);
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      mutateRecoveryPassword(values);
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
                <Typography align={Align.center}>{t('form.passwordRecovery.title')}</Typography>
              </Box>
            </Grid>
            <Grid xs={10} item>
              <FormControl fullWidth>
                <InputLabel error={isError(FormInputs.email)}>
                  {t('form.passwordRecovery.input.email.label')}
                </InputLabel>
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
        </CardContent>
        <CardActions>
          <Grid justify={AlignFlex.center} container>
            <Box mb={2}>
              <Button color={Color.primary} disabled={isLoading} type='submit' variant='contained'>
                {t('form.passwordRecovery.button.label')}
              </Button>
            </Box>
          </Grid>
        </CardActions>
      </form>
    </Card>
  );
};

export default PasswordRecoveryForm;
