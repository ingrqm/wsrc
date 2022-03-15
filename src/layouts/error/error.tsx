import { Outlet } from 'react-router-dom';
import { LanguagePicker } from 'components';
import { StyledWrapperLanguagePicker, StyledWrapper } from './error.styled';

const Error = () => (
  <StyledWrapper>
    <StyledWrapperLanguagePicker>
      <LanguagePicker />
    </StyledWrapperLanguagePicker>
    <Outlet />
  </StyledWrapper>
);

export default Error;
