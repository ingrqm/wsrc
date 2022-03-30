import { Outlet } from 'react-router-dom';
import { PrivateWrapper } from 'components';

const App = () => (
  <PrivateWrapper>
    <div>
      app layout
      <Outlet />
    </div>
  </PrivateWrapper>
);

export default App;
