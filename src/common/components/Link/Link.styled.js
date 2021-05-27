import styled from 'styled-components';

import { Link } from '@material-ui/core';

const StyledLink = styled(Link)`
  text-align: ${({ align }) => align};

  :hover {
    cursor: pointer;
  }
`;

export { StyledLink };
