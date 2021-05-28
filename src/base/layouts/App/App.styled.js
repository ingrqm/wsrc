import styled from 'styled-components';

import { Box, Container } from '@material-ui/core';

const StyledMain = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh + 1px);
  overflow-x: hidden;
`;

const StyledContainer = styled(Container)`
  transform: translateX(${({ $isOpen }) => ($isOpen ? '250px' : '0')});
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

export { StyledMain, StyledContainer };
