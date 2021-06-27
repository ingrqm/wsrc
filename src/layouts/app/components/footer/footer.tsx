import Image from 'next/image';

import { FC } from 'react';

import { Grid } from '@material-ui/core';

import { StyledFooter, StyledCopyright } from './footer.styled';

import IMaxartImg from 'assets/images/footer-brand.png';

const Footer: FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <StyledFooter $isOpen={isOpen} color='dark.contrastText'>
    <Grid container>
      <Grid item>
        <StyledCopyright>© 2021</StyledCopyright>
      </Grid>
      <Grid item>
        <Image alt='IMaxart' height={13} src={IMaxartImg} width={76} />
      </Grid>
    </Grid>
  </StyledFooter>
);

export default Footer;
