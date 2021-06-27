import Head from 'next/head';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Portal } from 'layouts';
import { Grid, Box } from '@material-ui/core';
import { appUrls } from 'urls';
import { SignUpForm } from '@forms';
import { Link } from '@components';
import { Align } from 'enums/align';

const SignUp: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <Portal>
        <SignUpForm />
        <Grid justify='space-between' container>
          <Grid item>
            <Box color='dark.contrastText' mt={2}>
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
