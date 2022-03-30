import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { PrivateWrapper } from 'components';
import { Content } from './app.styled';
import { Header, Sidebar } from './components';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleToggleOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <PrivateWrapper>
      <Sidebar isOpen={isSidebarOpen} />
      <Header isOpen={isSidebarOpen} onOpen={handleToggleOpen} />
      <Content isOpen={isSidebarOpen}>
        <Outlet />
      </Content>
    </PrivateWrapper>
  );
};

export default App;
