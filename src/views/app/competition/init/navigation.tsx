import { FC } from 'react';

import { AlignFlex } from '@enums/align';

import { Box, Button, Grid } from '@material-ui/core';

const Navigation: FC<{ page: number; pages: number }> = ({ page, pages }) => (
  <Grid justify={AlignFlex.between} container>
    <Button color='primary'>previous</Button>
    <Box mt={1}>
      Page {page} from {pages}
    </Box>
    <Button color='primary'>next</Button>
  </Grid>
);

export default Navigation;
