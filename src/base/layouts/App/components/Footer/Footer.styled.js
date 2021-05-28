import styled from 'styled-components';

import { Box } from '@material-ui/core';

const StyledFooter = styled(Box)`
  margin-top: 40px;
  display: flex;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '250px' : '0')});
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

const StyledCopyright = styled.p`
  font-weight: 200;
  font-size: 0.95rem;
  margin: 0 0.25rem 0 0;
`;

export { StyledFooter, StyledCopyright };
