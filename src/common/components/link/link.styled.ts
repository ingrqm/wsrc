import { Link } from '@material-ui/core';

import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-align: ${({ align }) => align};

  :hover {
    cursor: pointer;
  }
`;

export { StyledLink };
