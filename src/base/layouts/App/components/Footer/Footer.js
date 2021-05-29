import Image from 'next/image';

import { bool } from 'prop-types';

import { Grid } from '@material-ui/core';

import { StyledFooter, StyledCopyright } from './Footer.styled';

import IMaxartImg from 'assets/images/footer-brand.png';

const Footer = ({ isOpen }) => (
  <StyledFooter $isOpen={isOpen} color="dark.contrastText">
    <Grid container>
      <Grid item>
        <StyledCopyright>© 2021</StyledCopyright>
      </Grid>
      <Grid item>
        <Image alt="IMaxart" height={13} src={IMaxartImg} width={76} />
      </Grid>
    </Grid>
  </StyledFooter>
);

Footer.propTypes = {
  isOpen: bool,
};

export default Footer;
