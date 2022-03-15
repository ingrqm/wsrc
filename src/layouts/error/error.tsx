import { Outlet } from 'react-router-dom';
import { StyledWrapper } from './error.styled';

const Error = () => (
  <StyledWrapper>
    <Outlet />
  </StyledWrapper>
);

export default Error;
