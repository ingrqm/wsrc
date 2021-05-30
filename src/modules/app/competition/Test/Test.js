import Head from 'next/head';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useQuery } from 'react-query';

import { request } from 'base/api';
import { resolveUrl } from 'utils/url';

import { useTheme } from '@material-ui/core/styles';
import { competition } from '@pages/app/competition/competition.data';
import { roles } from 'consts';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import * as yup from 'yup';

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
  InputLabel,
  Input,
  FormHelperText,
  Card,
  CardContent,
} from '@material-ui/core';

import { appUrls, apiUrls } from 'urls';

import { App } from '@layouts';

const getUser = async () => {
  return await request(
    process.env.NEXT_PUBLIC_API_URL,
    'GET',
    resolveUrl(apiUrls.app.getUser, { token: sessionStorage.getItem('token') }),
    {},
  );
};

const putCompetition = async (values) => {
  return request(process.env.NEXT_PUBLIC_API_URL, 'PUT', apiUrls.app.competition, values);
};

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, error, data } = useQuery('getCompetitions', getUser);
  const { mutate: mutateCompetition } = useMutation(putCompetition, {
    onError: () => {
      enqueueSnackbar('an error ocurred', { variant: 'error' });
    },
    onSuccess: () => {
      router.push(appUrls.app.dashboard);
    },
  });

  const role = data ? data.data.data.role : '';

  const questions = data ? competition[data.data.data.language][data.data.data.age_category].questions : [];

  const initialValues = {};

  questions.map((_, index) => {
    initialValues[`question-${index}`] = '';
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object({}),
    onSubmit: () => {},
  });

  if (!isLoading && error) {
    sessionStorage.clear();
    router.push(appUrls.portal.signIn);
    enqueueSnackbar('there was a problem with the token, you will be sign out', { variant: 'error' });
  }

  const handleEndTest = () => {
    const payload = {
      token: sessionStorage.getItem('token'),
      ...formik.values,
    };

    console.log(payload);

    mutateCompetition(payload);
  };

  const handleDialog = () => {
    setIsOpen(!isOpen);
  };

  const isError = (field) => {
    return formik.touched[field] && Boolean(formik.errors[field]) ? true : false;
  };

  const errorMessage = (field) => {
    return formik.touched[field] && formik.errors[field] ? formik.errors[field] : '';
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <App>
        {data && role === roles.member && (
          <>
            <Grid justify="center" container>
              <Grid lg={4} md={6} sm={10} xs={12} item>
                <Card>
                  <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <CardContent>
                      {questions.map((question, index) => {
                        const field = `question-${index}`;
                        return (
                          <Grid justify="center" key={`question-${index}`} container>
                            <Grid mb={3} xs={10} item>
                              <FormControl fullWidth>
                                {question}
                                <Input
                                  disabled={isLoading}
                                  error={isError(field)}
                                  name={field}
                                  onChange={formik.handleChange}
                                  type="password"
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
                  </form>
                </Card>
              </Grid>
            </Grid>
            <Grid justify="center" container>
              <Button color="primary" onClick={handleDialog}>
                end test
              </Button>
            </Grid>
            <Dialog fullScreen={fullScreen} onClose={handleDialog} open={isOpen}>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  after ending the test, you will not be able to write answers again
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={handleDialog} autoFocus>
                  I stay and write answers
                </Button>
                <Button color="primary" onClick={handleEndTest} autoFocus>
                  I end the test
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </App>
    </>
  );
};

export default Test;
