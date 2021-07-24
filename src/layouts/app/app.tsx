import { useRouter } from 'next/router';

import { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@redux/store';
import { sliceActions } from '@redux/user/slice';

import { appUrls } from 'urls';

import { Footer, Navbar, Sidebar } from './components';

import { StyledMain, StyledContainer } from './app.styled';

const App: FC = ({ children }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { isSignIn } = useSelector<RootState, { isSignIn: boolean }>(({ user: { isSignIn } }) => ({
    isSignIn,
  }));

  useEffect(() => {
    if (!isSignIn) {
      console.log('sign out app.tsx');
      dispatch(sliceActions.signOutSuccess());

      router.push(appUrls.portal.signIn);
    }
  }, []);

  return (
    <StyledMain $isOpen={isOpen} bgcolor='secondary.main'>
      <Sidebar isOpen={isOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledContainer $isOpen={isOpen} container>
        {isSignIn && children}
      </StyledContainer>
      <Footer isOpen={isOpen} />
    </StyledMain>
  );
};

export default App;
