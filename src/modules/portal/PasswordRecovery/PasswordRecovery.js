import Head from 'next/head';
import { useRouter } from 'next/router';

import React from 'react';

import { translate } from 'base/i18n';

import { Grid, Box } from '@material-ui/core';

import { appUrls } from 'urls';

import { Portal } from '@layouts';

import { PasswordRecovery as PasswordRecoveryForm, PasswordChange as PasswordChangeForm } from '@forms';

import { Link } from '@components';

const PasswordRecovery = () => {
  const router = useRouter();
  const { key } = router.query;

  return (
    <>
      <Head>
        {key && <title>Password change</title>}
        {!key && <title>Password recovery</title>}
      </Head>
      <Portal>
        {key && <PasswordChangeForm />}
        {!key && (
          <>
            <PasswordRecoveryForm />
            <Grid justify="flex-end" container>
              <Grid item>
                <Box color="dark.contrastText" mt={2}>
                  <Link align="right" href={appUrls.portal.signIn}>
                    {translate('page.passwordRecovery.actions.signIn')}
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Portal>
    </>
  );
};
export default PasswordRecovery;
