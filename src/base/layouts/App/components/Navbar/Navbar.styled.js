import styled from 'styled-components';

import { Box } from '@material-ui/core';

const StyledNavbar = styled(Box)`
  width: 100%;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '250px' : '0')});
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  .MuiSvgIcon-root {
    color: #fff;
  }
`;

export { StyledNavbar };
