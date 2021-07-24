import Image from 'next/image';
import { useRouter } from 'next/router';

import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@redux/store';

import { appUrls } from 'urls';

import { Container, Grid } from '@material-ui/core';

import { StyledMain, StyledHeader, StyledFooter, StyledCopyright } from './portal.styled';

import LogoImg from 'assets/images/brand.png';
import IMaxartImg from 'assets/images/footer-brand.png';

const Portal: FC = ({ children }) => {
  const router = useRouter();

  const { isSignIn } = useSelector<RootState, { isSignIn: boolean }>(({ user: { isSignIn } }) => ({
    isSignIn,
  }));
  const state = useSelector<RootState, {}>((state) => state);

  useEffect(() => {
    console.log(state);
    if (isSignIn) {
      router.push(appUrls.app.dashboard);
    }
  }, []);

  return (
    <StyledMain bgcolor='secondary.main'>
      <StyledHeader>
        <Image alt='brand' height={100} src={LogoImg} width={77} />
      </StyledHeader>
      <Container maxWidth='xs'>{children}</Container>
      <StyledFooter color='secondary.contrastText'>
        <Grid container>
          <Grid item>
            <StyledCopyright>© 2021</StyledCopyright>
          </Grid>
          <Grid item>
            <Image alt='IMaxart' height={13} src={IMaxartImg} width={76} />
          </Grid>
        </Grid>
      </StyledFooter>
    </StyledMain>
  );
};

export default Portal;
