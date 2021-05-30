import Image from 'next/image';

import React from 'react';

import { node } from 'prop-types';

import { Container, Grid } from '@material-ui/core';

import { StyledMain, StyledHeader, StyledFooter, StyledCopyright } from './Portal.styled';

import LogoImg from 'assets/images/brand.png';
import IMaxartImg from 'assets/images/footer-brand.png';

const Portal = ({ children }) => (
  <StyledMain bgcolor="dark.main">
    <StyledHeader>
      <Image alt="brand" height={100} src={LogoImg} width={77} />
    </StyledHeader>
    <Container maxWidth="xs">{children}</Container>
    <StyledFooter color="dark.contrastText">
      <Grid container>
        <Grid item>
          <StyledCopyright>© 2021</StyledCopyright>
        </Grid>
        <Grid item>
          <Image alt="IMaxart" height={13} src={IMaxartImg} width={76} />
        </Grid>
      </Grid>
    </StyledFooter>
  </StyledMain>
);

Portal.propTypes = {
  children: node,
};

export default Portal;
