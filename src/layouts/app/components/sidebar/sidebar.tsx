import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppstoreOutlined, AuditOutlined, TeamOutlined } from '@ant-design/icons';
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
        {[Permission.user, Permission.arbiter, Permission.admin, Permission.superAdmin].includes(user?.permission) && (
          <Item onClick={() => handleNavigate(appUrls.app.dashboard)}>
            <AppstoreOutlined />
            {t('app.sidebar.dashboard')}
          </Item>
        )}
        {[Permission.arbiter, Permission.admin, Permission.superAdmin].includes(user?.permission) && (
          <Item onClick={() => handleNavigate(appUrls.app.results)}>
            <AuditOutlined />
            {t('app.sidebar.results')}
          </Item>
        )}
        {[Permission.admin, Permission.superAdmin].includes(user?.permission) && (
          <Item onClick={() => handleNavigate(appUrls.app.users)}>
            <TeamOutlined />
            {t('app.sidebar.users')}
          </Item>
        )}
      </List>
    </Wrapper>
  );
};

export default Sidebar;
