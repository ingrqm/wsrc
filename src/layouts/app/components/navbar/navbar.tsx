import { FC } from 'react';
import { IconButton } from '@material-ui/core';
import { Menu, Notes } from '@material-ui/icons';
import { StyledNavbar } from './navbar.styled';

const Navbar: FC<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void }> = ({ isOpen, setIsOpen }) => (
  <StyledNavbar $isOpen={isOpen} display='flex' justifyContent='space-between'>
    <IconButton onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <Menu fontSize='large' /> : <Notes fontSize='large' />}
    </IconButton>
  </StyledNavbar>
);

export default Navbar;
