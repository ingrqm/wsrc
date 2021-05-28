import styled from 'styled-components';

import { Box } from '@material-ui/core';

const StyledMain = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh + 1px);
  padding: 4rem;
`;

const StyledHeader = styled(Box)`
  margin-bottom: 40px;
`;

const StyledFooter = styled(Box)`
  margin-top: 40px;
  display: flex;
`;

const StyledCopyright = styled.p`
  font-weight: 200;
  font-size: 0.95rem;
  margin: 0 0.25rem 0 0;
`;

export { StyledMain, StyledHeader, StyledFooter, StyledCopyright };
