import React from 'react';

import { node } from 'prop-types';

import { Container } from '@material-ui/core';

import { StyledMain } from './Portal.styled';

const Portal = ({ children }) => (
  <StyledMain bgcolor="dark.main">
    <Container maxWidth="xs">{children}</Container>
  </StyledMain>
);

Portal.propTypes = {
  children: node,
};

export default Portal;
