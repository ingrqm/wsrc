import { string, bool, func, oneOf } from 'prop-types';

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = ({ open, onClose, message, type }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={open}
    onClose={onClose}
    autoHideDuration={6000}
  >
    <MuiAlert onClose={onClose} elevation={6} variant="filled" severity={type}>
      {message}
    </MuiAlert>
  </Snackbar>
);

Alert.propTypes = {
  open: bool.isRequired,
  onClose: func.isRequired,
  message: string,
  type: oneOf(['success', 'error ', 'warning', 'info']).isRequired,
};

export default Alert;
