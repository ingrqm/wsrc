import { FC } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { AlignFlex } from 'enums/align';

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
