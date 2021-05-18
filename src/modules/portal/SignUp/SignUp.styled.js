import Flag from 'react-world-flags';

import styled from 'styled-components';

import { Box } from '@material-ui/core';

const StyledMain = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledFlag = styled(Flag)`
  max-width: 25px;
  height: auto;
  margin-right: 0.5rem;
`;

const StyledPrefix = styled.span`
  position: relative;
  top: -1px;
  margin-right: 0.5rem;
`;

export { StyledMain, StyledFlag, StyledPrefix };
