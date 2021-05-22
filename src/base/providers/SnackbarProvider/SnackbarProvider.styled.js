import styled from 'styled-components';

import { IconButton } from '@material-ui/core';

const StyledIconWrapper = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const StyledIconButton = styled(IconButton)`
  padding: 6px !important;

  path,
  svg {
    fill: #fff;
  }
`;

export { StyledIconWrapper, StyledIconButton };
