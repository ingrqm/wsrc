import MuiAlert from '@material-ui/lab/Alert';
import { string, bool, func, oneOf } from 'prop-types';

import { Snackbar } from '@material-ui/core';

const Alert = ({ open, onClose, message, type }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    autoHideDuration={6000}
    onClose={onClose}
    open={open}
  >
    <MuiAlert elevation={6} onClose={onClose} severity={type} variant="filled">
      {message}
    </MuiAlert>
  </Snackbar>
);

Alert.propTypes = {
  open: bool.isRequired,
  onClose: func.isRequired,
  message: string,
  type: oneOf(['success', 'error', 'warning', 'info']).isRequired,
};

export default Alert;
