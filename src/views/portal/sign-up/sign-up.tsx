import { NextPage } from 'next';
import Head from 'next/head';

import { useTranslation } from 'react-i18next';

import { Align } from '@enums/align';

import { appUrls } from 'urls';

import { Grid, Box } from '@material-ui/core';

import { Portal } from '@layouts';

import { SignUpForm } from '@forms';

import { Link } from '@components';

const SignUp: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('page.signUp.head.title')}</title>
      </Head>

      <Portal>
        <SignUpForm />
        <Grid justify='space-between' container>
          <Grid item>
            <Box color='secondary.contrastText' mt={2}>
              <Link align={Align.left} href={appUrls.portal.signIn}>
                {t('page.signUp.actions.signIn')}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Portal>
    </>
  );
};

export default SignUp;
