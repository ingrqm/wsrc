import Image from 'next/image';

import React from 'react';

import { node } from 'prop-types';

import { Container, Grid } from '@material-ui/core';

import { outerUrls } from 'urls';

import { StyledMain, StyledHeader, StyledFooter, StyledCopyright } from './Portal.styled';

import LogoImg from 'assets/images/brand.png';
import IMaxartImg from 'assets/images/footer-brand.png';

const Portal = ({ children }) => (
  <StyledMain bgcolor="dark.main">
    <StyledHeader>
      <Image alt="brand" height={76} src={LogoImg} width={200} />
    </StyledHeader>
    <Container maxWidth="xs">{children}</Container>
    <StyledFooter color="dark.contrastText">
      <Grid container>
        <Grid item>
          <StyledCopyright>© 2021</StyledCopyright>
        </Grid>
        <Grid item>
          <a href={outerUrls.IMaxart} rel="noreferrer" target="_blank">
            <Image alt="IMaxart" height={13} src={IMaxartImg} width={76} />
          </a>
        </Grid>
      </Grid>
    </StyledFooter>
  </StyledMain>
);

Portal.propTypes = {
  children: node,
};

export default Portal;