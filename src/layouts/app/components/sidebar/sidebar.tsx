import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppstoreOutlined, AuditOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import { LogoImg } from 'assets/images';
import { User, userAtom } from 'atoms/user';
import { Permission } from 'enums';
import { useWindowDimensions } from 'hooks';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { CloseIcon, Header, Item, List, Wrapper } from './sidebar.styled';

type Props = {
  isOpen: boolean;
  onOpen: () => void;
};

const Sidebar = ({ isOpen, onOpen }: Props) => {
  const { t } = useTranslation();
  const [width] = useWindowDimensions();
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom) as User;
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavigate = (path: string) => {
    navigate(path);

    if (width <= 575) {
      onOpen();
    }
  };

  return (
    <Wrapper isOpen={isOpen}>
      <CloseIcon onClick={onOpen} />
      <Header>
        <LogoImg />
      </Header>
      <List>
        {[Permission.newbie, Permission.user, Permission.arbiter, Permission.admin, Permission.superAdmin].includes(
          user?.permission
        ) && (
          <Item
            onClick={() => handleNavigate(appUrls.app.dashboard)}
            className={currentPath === appUrls.app.dashboard ? 'active' : ''}
          >
            <AppstoreOutlined />
            {t('app.sidebar.dashboard')}
          </Item>
        )}
        {[Permission.newbie, Permission.user, Permission.arbiter, Permission.admin, Permission.superAdmin].includes(
          user?.permission
        ) && (
          <Item
            onClick={() => handleNavigate(appUrls.app.personalData)}
            className={currentPath === appUrls.app.personalData ? 'active' : ''}
          >
            <SettingOutlined />
            {t('app.sidebar.personalData')}
          </Item>
        )}
        {[Permission.arbiter, Permission.admin, Permission.superAdmin].includes(user?.permission) && (
          <Item
            onClick={() => handleNavigate(appUrls.app.results)}
            className={currentPath === appUrls.app.results ? 'active' : ''}
          >
            <AuditOutlined />
            {t('app.sidebar.results')}
          </Item>
        )}
        {[Permission.admin, Permission.superAdmin].includes(user?.permission) && (
          <Item
            onClick={() => handleNavigate(appUrls.app.users)}
            className={currentPath === appUrls.app.users ? 'active' : ''}
          >
            <TeamOutlined />
            {t('app.sidebar.users')}
          </Item>
        )}
      </List>
    </Wrapper>
  );
};

export default Sidebar;
