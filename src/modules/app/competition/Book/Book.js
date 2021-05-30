import Head from 'next/head';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useMutation } from 'react-query';

import { request } from 'base/api';
import { resolveUrl } from 'utils/url';

import { useTheme } from '@material-ui/core/styles';
import { competition } from '@pages/app/competition/competition.data';
import { roles } from 'consts';
import { useSnackbar } from 'notistack';
import { number, func } from 'prop-types';

import {
  Button,
  Box,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  useMediaQuery,
} from '@material-ui/core';

import { appUrls, apiUrls } from 'urls';

import { App } from '@layouts';

import { StyledPdf } from './Book.styled';

const getUser = async () => {
  return await request(
    process.env.NEXT_PUBLIC_API_URL,
    'GET',
    resolveUrl(apiUrls.app.getUser, { token: sessionStorage.getItem('token') }),
    {},
  );
};

const patchCompetition = async (values) => {
  return request(process.env.NEXT_PUBLIC_API_URL, 'PATCH', apiUrls.app.competition, values);
};

const CustomNavigation = ({ page, pages, handlePrevClick, handleNextClick }) => (
  <Grid justify="space-between" container>
    <Button color="primary" onClick={handlePrevClick}>
      previous
    </Button>
    <Box mt={1}>
      Page {page} from {pages}
    </Box>
    <Button color="primary" onClick={handleNextClick}>
      next
    </Button>
  </Grid>
);

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const { scale: scaleInit } = router.query;
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, error, data } = useQuery('getCompetitions', getUser);
  const [scale, setScale] = useState(1.0);
  const { mutate: mutateCompetition } = useMutation(patchCompetition, {
    onError: () => {
      enqueueSnackbar('an error ocurred', { variant: 'error' });
    },
    onSuccess: () => {
      router.push(appUrls.app.competition.test);
    },
  });
  const handleIncreaseScale = () => {
    setScale(Number((scale + 0.1).toFixed(1)));
  };

  const handleDecreaseScale = () => {
    setScale(Number((scale - 0.1).toFixed(1)));
  };

  const pdf = data ? competition[data.data.data.language][data.data.data.age_category].book : '';
  const role = data ? data.data.data.role : '';

  if (!isLoading && error) {
    sessionStorage.clear();
    router.push(appUrls.portal.signIn);
    enqueueSnackbar('there was a problem with the token, you will be sign out', { variant: 'error' });
  }

  useEffect(() => {
    setScale(Number(scaleInit));
  }, []);

  const handleStartTest = () => {
    handleDialog();
    const payload = {
      token: sessionStorage.getItem('token'),
    };

    mutateCompetition(payload);
  };

  const handleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <App>
        <Grid justify="space-between" container>
          <Button color="primary" onClick={handleDecreaseScale}>
            lower
          </Button>
          <Button color="primary" onClick={handleIncreaseScale}>
            higher
          </Button>
        </Grid>
        <Grid justify="center" container>
          {data && role === roles.member && (
            <>
              <StyledPdf
                document={{
                  base64: pdf,
                }}
                navigation={CustomNavigation}
                scale={scale}
              />
            </>
          )}
        </Grid>
        <Grid justify="center" container>
          <Button color="primary" onClick={handleDialog}>
            start test
          </Button>
        </Grid>
        <Dialog fullScreen={fullScreen} onClose={handleDialog} open={isOpen}>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogContent>
            <DialogContentText>after starting the test, you will not be able to read again</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleDialog} autoFocus>
              I stay and read
            </Button>
            <Button color="primary" onClick={handleStartTest} autoFocus>
              I'm starting the test
            </Button>
          </DialogActions>
        </Dialog>
      </App>
    </>
  );
};

CustomNavigation.propTypes = {
  page: number,
  pages: number,
  handlePrevClick: func,
  handleNextClick: func,
};

export default Book;
