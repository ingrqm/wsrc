import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useWindowDimensions } from 'hooks';
import { PrivateWrapper } from 'components';
import { Content } from './app.styled';
import { Header, Sidebar } from './components';

const App = () => {
  const [width] = useWindowDimensions();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(width > 575);

  const handleToggleOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(width > 575);
  }, [width]);

  return (
    <PrivateWrapper>
      <Sidebar isOpen={isSidebarOpen} onOpen={handleToggleOpen} />
      <Header isOpen={isSidebarOpen} onOpen={handleToggleOpen} />
      <Content isOpen={isSidebarOpen}>
        <Outlet />
      </Content>
    </PrivateWrapper>
  );
};

export default App;
