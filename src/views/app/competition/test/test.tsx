import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';

import { RootState } from '@redux/store';

import { Age } from '@enums/age';
import { AlignFlex } from '@enums/align';
import { Color } from '@enums/color';
import { Language } from '@enums/language';
import { Permission } from '@enums/permission';

import { appUrls } from 'urls';

import {
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  useMediaQuery,
  FormControl,
  Input,
  FormHelperText,
  Card,
  CardContent,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import { App } from '@layouts';

import { competition } from '@views/app/competition/competition.data';

import { fetchCompetitionTest } from './test.api';

const Test: NextPage = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { enqueueSnackbar } = useSnackbar();

  const { isSignIn, language, ageCategory, permission } = useSelector<
    RootState,
    {
      isSignIn: boolean;
      language: Language | undefined;
      ageCategory: Age | undefined;
      permission: Permission | undefined;
    }
  >(({ user }) => ({
    isSignIn: user.isSignIn,
    permission: user?.permission,
    language: user?.language,
    ageCategory: user?.ageCategory,
  }));

  const { mutate: mutateCompetition } = useMutation(fetchCompetitionTest, {
    onError: () => {
      enqueueSnackbar('an error ocurred', { variant: 'error' });
    },
    onSuccess: () => {
      router.push(appUrls.app.dashboard);
    },
  });

  const questionsData = isSignIn && language && ageCategory && competition[language][ageCategory];
  const questions: string[] = questionsData ? questionsData.questions : [];

  const initialValues: { [key: string]: string } = {};

  questions.forEach((_, index) => {
    initialValues[`question-${index}`] = '';
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const payload = {
        answers: values,
      };

      mutateCompetition(payload);
    },
  });

  const handleDialog = (): void => {
    setIsOpenDialog(!isOpenDialog);
  };

  const isError = (field: string): boolean => !!(formik.touched[field] && Boolean(formik.errors[field]));

  const errorMessage = (field: string): string =>
    (formik.touched[field] && formik.errors[field] && formik.errors[field]) || '';

  useEffect(() => {
    if (permission !== Permission.member) {
      router.push(appUrls.app.dashboard);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <App>
        {permission === Permission.member && (
          <>
            <Grid justify={AlignFlex.center} container>
              <Grid lg={4} md={6} sm={10} xs={12} item>
                <Card>
                  <form autoComplete='off' onSubmit={formik.handleSubmit}>
                    <CardContent>
                      {questions.map((question, index) => {
                        const field = `question-${index}`;

                        return (
                          <Grid justify={AlignFlex.center} key={field} container>
                            <Grid xs={10} item>
                              <FormControl fullWidth>
                                {question}
                                <Input
                                  error={isError(field)}
                                  name={field}
                                  onChange={formik.handleChange}
                                  type='password'
                                  value={formik.values[field]}
                                  multiline
                                />
                                <FormHelperText error={isError(field)}>{errorMessage(field)}</FormHelperText>
                              </FormControl>
                            </Grid>
                          </Grid>
                        );
                      })}
                    </CardContent>
                    <Dialog fullScreen={fullScreen} onClose={handleDialog} open={isOpenDialog}>
                      <DialogTitle>Are you sure?</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          after ending the test, you will not be able to write answers again
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button color={Color.primary} onClick={handleDialog}>
                          I stay and write answers
                        </Button>
                        <Button type='submit' color={Color.primary}>
                          I end the test
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </form>
                </Card>
              </Grid>
            </Grid>
            <Grid justify={AlignFlex.center} container>
              <Button color={Color.primary} onClick={handleDialog}>
                end test
              </Button>
            </Grid>
          </>
        )}
      </App>
    </>
  );
};

export default Test;