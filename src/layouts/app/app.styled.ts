import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';

const StyledMain = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh + 1px);
  overflow-x: hidden;
`;

const StyledContainer = styled(Grid)`
  min-height: calc(100vh - 59px - 19px - 80px);
  padding: 1rem;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '250px' : '0')});
  transition: ${({ $isOpen }) =>
    $isOpen ? '225ms cubic-bezier(0, 0, 0.2, 1) 0ms' : '195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'};
  color: #fff;
`;

export { StyledMain, StyledContainer };
