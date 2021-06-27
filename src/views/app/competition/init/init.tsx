import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';

import { RootState } from '@redux/store';

import { Age } from '@enums/age';
import { AlignFlex } from '@enums/align';
import { Language } from '@enums/language';
import { Permission } from '@enums/permission';

import { appUrls } from 'urls';

import { Button, Grid } from '@material-ui/core';

import { useSnackbar } from 'notistack';

import { App } from '@layouts';

import { competition } from '@views/app/competition/competition.data';

import Navigation from './navigation';

import { fetchCompetitionInit } from './init.api';

import { StyledPdf } from './init.styled';

const Init: NextPage = () => {
  const router = useRouter();
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

  const pdfData = isSignIn && language && ageCategory && competition[language][ageCategory];
  const pdf: string = pdfData ? pdfData.book : '';

  const { mutate: mutateCompetition } = useMutation(fetchCompetitionInit, {
    onError: () => {
      enqueueSnackbar('an error ocurred', { variant: 'error' });
    },
    onSuccess: () => {
      router.push({
        pathname: appUrls.app.competition.book,
        query: { scale },
      });
    },
  });

  const [scale, setScale] = useState(1);

  const handleIncreaseScale = (): void => {
    setScale(Number((scale + 0.1).toFixed(1)));
  };

  const handleDecreaseScale = (): void => {
    setScale(Number((scale - 0.1).toFixed(1)));
  };

  const handleStartRead = (): void => {
    const payload = {
      scale,
    };

    mutateCompetition(payload);
  };

  useEffect(() => {
    if (isSignIn) {
      enqueueSnackbar('adjust the size of the book before you start reading', { variant: 'info' });

      if (permission !== Permission.member) {
        router.push(appUrls.app.dashboard);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <App>
        {permission === Permission.member && (
          <>
            <Grid justify={AlignFlex.between} container>
              <Button color='primary' onClick={handleDecreaseScale}>
                lower
              </Button>
              <Button color='primary' onClick={handleIncreaseScale}>
                higher
              </Button>
            </Grid>
            <Grid justify={AlignFlex.center} container>
              <StyledPdf
                document={{
                  base64: pdf,
                }}
                navigation={Navigation}
                scale={scale}
              />
            </Grid>
            <Grid justify={AlignFlex.center} container>
              <Button color='primary' onClick={handleStartRead}>
                start reading
              </Button>
            </Grid>
          </>
        )}
      </App>
    </>
  );
};

export default Init;
