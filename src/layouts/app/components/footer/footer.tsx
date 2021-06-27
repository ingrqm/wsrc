import Image from 'next/image';

import { Grid } from '@material-ui/core';
import { FC } from 'react';
import IMaxartImg from 'assets/images/footer-brand.png';
import { StyledFooter, StyledCopyright } from './Footer.styled';

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
