import Flag from 'react-world-flags';

import styled from 'styled-components';

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

export { StyledFlag, StyledPrefix };
