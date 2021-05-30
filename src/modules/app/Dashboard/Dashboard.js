import Head from 'next/head';
import { useRouter } from 'next/router';

import React from 'react';
import { useQuery } from 'react-query';

import { request } from 'base/api';
import { resolveUrl } from 'utils/url';

import { competition } from '@pages/app/competition/competition.data';
import { roles } from 'consts';
import { useSnackbar } from 'notistack';

import { Typography, Box } from '@material-ui/core';

import { appUrls, apiUrls } from 'urls';

import { App } from '@layouts';

import { Timer } from '@components';

const getUser = async () => {
  return await request(
    process.env.NEXT_PUBLIC_API_URL,
    'GET',
    resolveUrl(apiUrls.app.getUser, { token: sessionStorage.getItem('token') }),
    {},
  );
};

const Dashboard = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, error, data } = useQuery('getCompetitions', getUser);

  const role = data ? data.data.data.role : '';

  const distance = data
    ? new Date(competition[data.data.data.language][data.data.data.age_category].start).getTime() -
      new Date(data.data.data.datetime).getTime()
    : 99999999999;

  const isParticipating = data ? data.data.data.isParticipating : false;

  if (!isLoading && error) {
    sessionStorage.clear();
    router.push(appUrls.portal.signIn);
    enqueueSnackbar('there was a problem with the token, you will be sign out', { variant: 'error' });
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <App>
        {role === roles.newbie && (
          <Box align="center" width="100%">
            <Typography variant="h4" gutterBottom>
              Welcome
            </Typography>
            <Typography variant="h6" gutterBottom>
              The registration, account activation and login process was successful
            </Typography>
            <Typography variant="h6" gutterBottom>
              Now the administrator only needs to confirm your participation in the championship so that you have access
              to join
            </Typography>
          </Box>
        )}
        {role === roles.member && (
          <Box align="center" width="100%">
            <Typography variant="h4" gutterBottom>
              Welcome
            </Typography>
            {!isParticipating ? (
              <>
                <Typography variant="h6" gutterBottom>
                  You have been confirmed as a competitor
                </Typography>
                <Typography variant="h6" gutterBottom>
                  When the timer is end you will be able to start the competition
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  You end the competition
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Thank you for your time
                </Typography>
              </>
            )}
            {data && <Timer distance={distance} isParticipating={isParticipating} />}
          </Box>
        )}
        {role === roles.arbiter && <div>arbiter</div>}
        {role === roles.admin && <div>admin</div>}
        {role === roles.developer && <div>developer</div>}
      </App>
    </>
  );
};

export default Dashboard;
