import Head from 'next/head';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { competition } from '@views/app/competition/competition.data';
import { Typography, Box } from '@material-ui/core';
import { App } from '@layouts';
import { Timer } from '@components';
import { Permission } from 'enums/permission';
import { getNow } from 'utils/time';
import { Align } from 'enums/align';
import { Age } from 'enums/age';
import { RootState } from 'redux/store';
import { Language } from 'enums/language';

const Dashboard: FC = () => {
  const { name, isSignIn, language, ageCategory, permission, isParticipating } = useSelector<
    RootState,
    {
      isSignIn: boolean;
      name: string | undefined;
      language: Language | undefined;
      ageCategory: Age | undefined;
      permission: Permission | undefined;
      isParticipating: boolean | undefined;
    }
  >(({ user }) => ({
    name: user?.name,
    isSignIn: user.isSignIn,
    permission: user?.permission,
    language: user?.language,
    ageCategory: user?.ageCategory,
    isParticipating: user?.isParticipating,
  }));

  const competitionData = isSignIn && language && ageCategory && competition[language][ageCategory];

  const distance: number = competitionData ? competitionData.start.getTime() - getNow() : 999999999;

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <App>
        {permission === Permission.newbie && (
          <Box width='100%'>
            <Typography align={Align.center} variant='h4' gutterBottom>
              Welcome {name}!
            </Typography>
            <Typography align={Align.center} variant='h6' gutterBottom>
              The registration, account activation and login process was successful
            </Typography>
            <Typography align={Align.center} variant='h6' gutterBottom>
              Now the administrator only needs to confirm your participation in the championship so that you have access
              to join
            </Typography>
          </Box>
        )}
        {permission === Permission.member && (
          <Box textAlign={Align.center} width='100%'>
            <Typography variant='h4' gutterBottom>
              Welcome {name}!
            </Typography>
            {!isParticipating ? (
              <>
                <Typography variant='h6' gutterBottom>
                  You have been confirmed as a competitor
                </Typography>
                <Typography variant='h6' gutterBottom>
                  When the timer is end you will be able to start the competition
                </Typography>
              </>
            ) : (
              <>
                <Typography variant='h6' gutterBottom>
                  You end the competition
                </Typography>
                <Typography variant='h6' gutterBottom>
                  Thank you for your time
                </Typography>
              </>
            )}
            <Timer distance={distance} isParticipating={isParticipating} />
          </Box>
        )}
        {permission === Permission.arbiter && <div>arbiter</div>}
        {permission === Permission.admin && <div>admin</div>}
        {permission === Permission.developer && <div>developer</div>}
      </App>
    </>
  );
};

export default Dashboard;
