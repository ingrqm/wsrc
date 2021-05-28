import React, { useState } from 'react';

import { node } from 'prop-types';

import { StyledMain, StyledContainer } from './App.styled';
import { Footer, Navbar, Sidebar } from './components';

const App = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledMain $isOpen={isOpen} bgcolor="dark.main">
      <Sidebar isOpen={isOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledContainer $isOpen={isOpen}>{children}</StyledContainer>
      <Footer isOpen={isOpen} />
    </StyledMain>
  );
};

App.propTypes = {
  children: node,
};

export default App;
