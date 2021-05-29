import Head from 'next/head';
import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { request } from 'base/api';
import { resolveUrl } from 'utils/url';

import { roles } from 'consts';

import { Typography, Box, Button } from '@material-ui/core';

import { appUrls, apiUrls } from 'urls';

import { App } from '@layouts';

const competition = async () => {
  return await request(
    process.env.NEXT_PUBLIC_API_URL,
    'GET',
    resolveUrl(apiUrls.portal.getCompetitions, { token: sessionStorage.getItem('token') }),
    {},
  );
};

const Dashboard = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(sessionStorage.getItem('role'));
  }, []);

  const { data } = useQuery('getCompetitions', competition);

  const stages = ['talk', 'magazine', 'creativity'];

  const endStages = data ? data.data.data.map(({ category }) => category) : [];

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
            <Typography variant="h6" gutterBottom>
              You have been confirmed as a competitor
            </Typography>
            {stages.length !== endStages.length && (
              <Typography variant="h6" gutterBottom>
                Now you can start the competition
              </Typography>
            )}
            {stages.length === endStages.length && (
              <>
                <Typography variant="h6" gutterBottom>
                  You end the competition
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Thank you for your time
                </Typography>
              </>
            )}
            {stages.map((item) => (
              <Link href={`${appUrls.app.competition}?stage=${item}`} key={`stage-${item}`}>
                <Button color="primary" disabled={endStages.includes(item)}>
                  {item}
                </Button>
              </Link>
            ))}
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
