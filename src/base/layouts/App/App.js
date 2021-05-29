import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';

import { node } from 'prop-types';

import { appUrls } from 'urls';

import { StyledMain, StyledContainer } from './App.styled';
import { Footer, Navbar, Sidebar } from './components';

const App = ({ children }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      router.push(appUrls.portal.signIn);
    }
  }, []);

  return (
    <StyledMain $isOpen={isOpen} bgcolor="dark.main">
      <Sidebar isOpen={isOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledContainer $isOpen={isOpen} container>
        {children}
      </StyledContainer>
      <Footer isOpen={isOpen} />
    </StyledMain>
  );
};

App.propTypes = {
  children: node,
};

export default App;
