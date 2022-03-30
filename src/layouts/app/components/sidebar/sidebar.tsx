import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppstoreOutlined, AuditOutlined, TeamOutlined } from '@ant-design/icons';
import { LogoImg } from 'assets/images';
import { User, userAtom } from 'atoms/user';
import { Permission } from 'enums';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { Header, Item, List, Wrapper } from './sidebar.styled';

type Props = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom) as User;

  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <LogoImg />
      </Header>
      <List>
        {[Permission.user, Permission.arbiter, Permission.admin, Permission.superAdmin].includes(user?.permission) && (
          <Item onClick={() => navigate(appUrls.app.dashboard)}>
            <AppstoreOutlined />
            {t('app.sidebar.dashboard')}
          </Item>
        )}
        {[Permission.arbiter, Permission.admin, Permission.superAdmin].includes(user?.permission) && (
          <Item onClick={() => navigate(appUrls.app.results)}>
            <AuditOutlined />
            {t('app.sidebar.results')}
          </Item>
        )}
        {[Permission.admin, Permission.superAdmin].includes(user?.permission) && (
          <Item onClick={() => navigate(appUrls.app.users)}>
            <TeamOutlined />
            {t('app.sidebar.users')}
          </Item>
        )}
      </List>
    </Wrapper>
  );
};

export default Sidebar;
