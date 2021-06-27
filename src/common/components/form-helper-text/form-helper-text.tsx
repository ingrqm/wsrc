import { FC } from 'react';
import { StyledFormHelperText } from './form-helper-text.styled';

const FormHelperText: FC<{ error: boolean }> = ({ error, children }) => (
  <StyledFormHelperText error={error}>{children}</StyledFormHelperText>
);

export default FormHelperText;
