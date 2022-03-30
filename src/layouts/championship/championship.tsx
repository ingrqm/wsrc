import { Outlet } from 'react-router-dom';
import { PrivateWrapper } from 'components';

const Championship = () => (
  <PrivateWrapper>
    <div>
      championship layout
      <Outlet />
    </div>
  </PrivateWrapper>
);

export default Championship;
