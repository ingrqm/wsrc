import { Box } from '@material-ui/core';

import styled from 'styled-components';

const StyledNavbar = styled(Box)`
  width: 100%;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '250px' : '0')});
  transition: ${({ $isOpen }) =>
    $isOpen ? '225ms cubic-bezier(0, 0, 0.2, 1) 0ms' : '195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'};

  .MuiSvgIcon-root {
    color: #fff;
  }
`;

export { StyledNavbar };
