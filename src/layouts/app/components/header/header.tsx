import { useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined } from '@ant-design/icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Image, Menu, Typography } from 'antd';
import { AuthSignOutProps, AuthSignOutRet, fetchAuthSignOut } from 'api';
import Img from 'assets/images/avatars/male.png';
import { initialUserAtom, userAtom } from 'atoms/user';
import { MutationKey } from 'enums';
import { useMutationWithError } from 'hooks';
import { t } from 'i18next';
import { useRecoilState } from 'recoil';
import { appUrls } from 'urls';
import { LanguagePicker } from 'components';
import { Navbar, Wrapper, NavbarUserItem } from './header.styled';

const { Paragraph } = Typography;

type Props = {
  isOpen: boolean;
  onOpen: () => void;
};

const Header = ({ isOpen, onOpen }: Props) => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

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
          <NavbarUserItem>
            <Image src={Img} preview={false} />
            <Paragraph className='mb-0 ml-2'>
              {user.name} {user.lastName}
            </Paragraph>
            <DownOutlined className='ml-2' />
          </NavbarUserItem>
        </Dropdown>
      </Navbar>
    </Wrapper>
  );
};

export default Header;
