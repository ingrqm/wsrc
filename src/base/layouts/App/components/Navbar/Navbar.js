import { func, bool } from 'prop-types';

import { IconButton } from '@material-ui/core';

import { Menu, Notes, ExitToApp } from '@material-ui/icons';

import { StyledNavbar } from './Navbar.styled';

const Navbar = ({ isOpen, setIsOpen }) => (
  <StyledNavbar $isOpen={isOpen} display="flex" justifyContent="space-between">
    <IconButton onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <Menu size="large" /> : <Notes size="large" />}
    </IconButton>
    <IconButton>
      <ExitToApp size="large" />
    </IconButton>
  </StyledNavbar>
);

Navbar.propTypes = {
  isOpen: bool,
  setIsOpen: func,
};

export default Navbar;
