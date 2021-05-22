import { node, bool } from 'prop-types';

import { StyledFormHelperText } from './FormHelperText.styled';

const FormHelperText = ({ error, children }) => <StyledFormHelperText error={error}>{children}</StyledFormHelperText>;

FormHelperText.propTypes = {
  error: bool.isRequired,
  children: node,
};

export default FormHelperText;
