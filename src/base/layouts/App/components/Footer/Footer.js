import Image from 'next/image';

import { bool } from 'prop-types';

import { Grid } from '@material-ui/core';

import { outerUrls } from 'urls';

import { StyledFooter, StyledCopyright } from './Footer.styled';

import IMaxartImg from 'assets/images/footer-brand.png';

const Footer = ({ isOpen }) => (
  <StyledFooter $isOpen={isOpen} color="dark.contrastText">
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
);

Footer.propTypes = {
  isOpen: bool,
};

export default Footer;
