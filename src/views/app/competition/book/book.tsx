import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
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
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { useSnackbar } from 'notistack';

import { App } from '@layouts';

import { competition } from '@views/app/competition/competition.data';

import Navigation from './navigation';

import { fetchCompetitionBook } from './book.api';

import { StyledPdf } from './book.styled';

const Book: NextPage = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [scale, setScale] = useState(1);
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

  const { scale: scaleInit } = router.query;

  const pdfData = isSignIn && language && ageCategory && competition[language][ageCategory];
  const pdf: string = pdfData ? pdfData.book : '';

  const { mutate: mutateCompetition } = useMutation(fetchCompetitionBook, {
    onError: () => {
      enqueueSnackbar('an error ocurred', { variant: 'error' });
    },
    onSuccess: () => {
      router.push(appUrls.app.competition.test);
    },
  });

  const handleIncreaseScale = (): void => {
    setScale(Number((scale + 0.1).toFixed(1)));
  };

  const handleDecreaseScale = (): void => {
    setScale(Number((scale - 0.1).toFixed(1)));
  };

  const handleDialog = (): void => {
    setIsOpenDialog(!isOpenDialog);
  };

  const handleStartTest = (): void => {
    handleDialog();

    mutateCompetition();
  };

  useEffect(() => {
    setScale(Number(scaleInit));
    if (permission !== Permission.member) {
      router.push(appUrls.app.dashboard);
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
              <Button color={Color.primary} onClick={handleDecreaseScale}>
                lower
              </Button>
              <Button color={Color.primary} onClick={handleIncreaseScale}>
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
              <Button color={Color.primary} onClick={handleDialog}>
                start test
              </Button>
            </Grid>
            <Dialog fullScreen={fullScreen} onClose={handleDialog} open={isOpenDialog}>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogContent>
                <DialogContentText>after starting the test, you will not be able to read again</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color={Color.primary} onClick={handleDialog}>
                  I stay and read
                </Button>
                <Button color={Color.primary} onClick={handleStartTest}>
                  I&apos;m starting the test
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </App>
    </>
  );
};

export default Book;
