import { useLocation } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Typography } from 'antd';
import { User, userAtom } from 'atoms/user';
import { t } from 'i18next';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { LanguagePicker } from 'components';
import { Hero, Navbar, Wrapper } from './header.styled';

const { Title } = Typography;

type Props = {
  isOpen: boolean;
  onOpen: () => void;
};

const Header = ({ isOpen, onOpen }: Props) => {
  const user = useRecoilValue(userAtom) as User;
  const location = useLocation();

  return (
    <Wrapper isOpen={isOpen}>
      <Navbar>
        {isOpen ? <MenuFoldOutlined onClick={() => onOpen()} /> : <MenuUnfoldOutlined onClick={() => onOpen()} />}
        <LanguagePicker />
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>{t('app.header.navbar.signOut')}</Menu.Item>
            </Menu>
          }
          trigger={['click']}
          arrow
        >
          <UserOutlined />
        </Dropdown>
      </Navbar>
      {location.pathname === appUrls.app.dashboard && (
        <Hero>
          <Title>{t('app.header.hero.dashboard.title', { name: user.name })}</Title>
          <Title level={5}>{t('app.header.hero.dashboard.subTitle')}</Title>
        </Hero>
      )}
    </Wrapper>
  );
};

export default Header;
