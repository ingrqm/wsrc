import Head from 'next/head';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useQuery } from 'react-query';

import { request } from 'base/api';
import { resolveUrl } from 'utils/url';

import { competition } from '@pages/app/competition/competition.data';
import { roles } from 'consts';
import { useSnackbar } from 'notistack';
import { number, func } from 'prop-types';

import { Button, Box, Grid } from '@material-ui/core';

import { appUrls, apiUrls } from 'urls';

import { App } from '@layouts';

import { StyledPdf } from './Init.styled';

const getUser = async () => {
  return await request(
    process.env.NEXT_PUBLIC_API_URL,
    'GET',
    resolveUrl(apiUrls.app.getUser, { token: sessionStorage.getItem('token') }),
    {},
  );
};

const postCompetition = async (values) => {
  return request(process.env.NEXT_PUBLIC_API_URL, 'POST', apiUrls.app.competition, values);
};

const CustomNavigation = ({ page, pages }) => (
  <Grid justify="space-between" container>
    <Button color="primary">previous</Button>
    <Box mt={1}>
      Page {page} from {pages}
    </Box>
    <Button color="primary">next</Button>
  </Grid>
);

const Init = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, error, data } = useQuery('getCompetitions', getUser);
  const { mutate: mutateCompetition } = useMutation(postCompetition, {
    onError: () => {
      enqueueSnackbar('an error ocurred', { variant: 'error' });
    },
    onSuccess: () => {
      router.push({
        pathname: appUrls.app.competition.book,
        query: { scale: scale },
      });
    },
  });
  const [scale, setScale] = useState(1);

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
    enqueueSnackbar('adjust the size of the book before you start reading', { variant: 'info' });
  }, []);

  const handleStartRead = () => {
    const payload = {
      token: sessionStorage.getItem('token'),
      scale: scale,
    };

    mutateCompetition(payload);
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
          <Button color="primary" onClick={handleStartRead}>
            start reading
          </Button>
        </Grid>
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

export default Init;
