import styled from 'styled-components';

import { Link } from '@material-ui/core';

const getAlign = (value) => {
  switch (value) {
    case 'start':
      return 'left';
    case 'center':
      return 'center';
    case 'end':
      return 'right';
    case 'justify':
      return 'justify';
  }
};

const StyledLink = styled(Link)`
  text-align: ${({ align }) => getAlign(align)};

  :hover {
    cursor: pointer;
  }
`;

export { StyledLink };
