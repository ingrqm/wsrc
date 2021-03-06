import { useLocation, useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Menu, Typography } from 'antd';
import { AuthSignOutProps, AuthSignOutRet, fetchAuthSignOut } from 'api';
import { initialUserAtom, userAtom } from 'atoms/user';
import { MutationKey } from 'enums';
import { useMutationWithError } from 'hooks';
import { t } from 'i18next';
import { useRecoilState } from 'recoil';
import { appUrls } from 'urls';
import { LanguagePicker } from 'components';
import { Hero, Navbar, Wrapper } from './header.styled';

const { Title } = Typography;

type Props = {
  isOpen: boolean;
  onOpen: () => void;
};

const Header = ({ isOpen, onOpen }: Props) => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();
  const location = useLocation();

  const signOut = useMutationWithError<AuthSignOutRet, Error, AuthSignOutProps>(() => fetchAuthSignOut(), {
    mutationKey: MutationKey.signOut,
    loadingMessage: t('form.signOut.messages.loading'),
    errorMessage: t('form.signOut.messages.error'),
    successMessage: t('form.signOut.messages.success'),
    onSettled: () => {
      setUser(initialUserAtom);
      navigate(appUrls.auth.signIn);

      sessionStorage.removeItem('authorization');
      localStorage.removeItem('authorization');
    },
  });

  const handleLogout = () => {
    signOut.mutateAsync({});
  };

  return (
    <Wrapper isOpen={isOpen}>
      <Navbar>
        {isOpen ? <MenuFoldOutlined onClick={() => onOpen()} /> : <MenuUnfoldOutlined onClick={() => onOpen()} />}
        <LanguagePicker />
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item onClick={handleLogout} key='signOut'>
                <FontAwesomeIcon className='mr-1' icon={faArrowRightFromBracket} />{' '}
                {t('app.header.navbar.signOut') as string}
              </Menu.Item>
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
          <Title>{t('app.header.hero.dashboard.title', { name: user.name }) as string}</Title>
          <Title level={5}>{t('app.header.hero.dashboard.subTitle') as string}</Title>
        </Hero>
      )}
    </Wrapper>
  );
};

export default Header;
