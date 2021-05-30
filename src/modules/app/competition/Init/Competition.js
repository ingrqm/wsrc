import Head from 'next/head';
import { useRouter } from 'next/router';

import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { request } from 'base/api';
import { resolveUrl } from 'utils/url';

import { competition } from '@pages/app/Competition/Competition.data';
import { roles } from 'consts';
import { useSnackbar } from 'notistack';
import { number, func } from 'prop-types';

import { Button, Typography, Box, Grid } from '@material-ui/core';

import { appUrls, apiUrls } from 'urls';

import { App } from '@layouts';

import { StyledPdf } from './Competition.styled';

const getUser = async () => {
  return await request(
    process.env.NEXT_PUBLIC_API_URL,
    'GET',
    resolveUrl(apiUrls.portal.getUser, { token: sessionStorage.getItem('token') }),
    {},
  );
};

const CustomNavigation = ({ page, pages, handlePrevClick, handleNextClick }) => (
  <Box>
    <Button onClick={handlePrevClick}>previous</Button>
    <Typography>
      Page {page} from {pages}
    </Typography>
    <Button onClick={handleNextClick}>next</Button>
  </Box>
);

const Competition = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, error, data } = useQuery('getCompetitions', getUser);
  const [scale, setScale] = useState(1.2);

  const handleIncreaseScale = () => {
    setScale(Number((scale + 0.1).toFixed(1)));
  };

  const handleDecreaseScale = () => {
    setScale(Number((scale + 0.1).toFixed(1)));
  };

  const pdf = data ? competition[data.data.data.language][data.data.data.age_category].book : '';
  const role = data ? data.data.data.role : '';

  if (!isLoading && error) {
    sessionStorage.clear();
    router.push(appUrls.portal.signIn);
    enqueueSnackbar('there was a problem with the token, you will be sign out', { variant: 'error' });
  }

  console.log(role);
  console.log(data);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <App>
        <Grid justify="center" container>
          {data && role === roles.member && (
            <StyledPdf
              document={{
                base64: pdf,
              }}
              navigation={CustomNavigation}
              scale={scale}
            />
          )}
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

export default Competition;
