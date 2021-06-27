import { Drawer } from '@material-ui/core';

import styled from 'styled-components';

const StyledSidebar = styled(Drawer)`
  .MuiDrawer-paper {
    width: 100%;
    max-width: 250px;
    background: #010029;
  }

  .MuiSvgIcon-colorPrimary {
    color: #4dbbb1;
  }

  .MuiTypography-body1 {
    color: #fff;
  }
`;

export { StyledSidebar };
