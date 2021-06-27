import { FC } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { AlignFlex } from 'enums/align';

const Navigation: FC<{ page: number; pages: number; handlePrevClick: () => void; handleNextClick: () => void }> = ({
  page,
  pages,
  handlePrevClick,
  handleNextClick,
}) => (
  <Grid justify={AlignFlex.between} container>
    <Button color='primary' onClick={handlePrevClick}>
      previous
    </Button>
    <Box mt={1}>
      Page {page} from {pages}
    </Box>
    <Button color='primary' onClick={handleNextClick}>
      next
    </Button>
  </Grid>
);

export default Navigation;
