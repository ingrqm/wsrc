import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FC, forwardRef } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@redux/store';

import { Permission } from '@enums/permission';

import { appUrls } from 'urls';

import { Grid, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import { useSnackbar } from 'notistack';

import { list } from './sidebar.data';

import { ItemTypes } from './sidebar.types';

import { StyledSidebar } from './sidebar.styled';

import LogoImg from 'assets/images/brand.png';

// eslint-disable-next-line react/display-name
const Item: FC<ItemTypes> = forwardRef<HTMLDivElement, ItemTypes>(({ icon, text, onClick }, ref) => (
  <ListItem onClick={onClick} ref={ref} button>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
));

const Sidebar: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const { isSignIn, permission } = useSelector<
    RootState,
    {
      isSignIn: boolean;
      permission: Permission | undefined;
    }
  >(({ user }) => ({
    isSignIn: user.isSignIn,
    permission: user?.permission,
    language: user?.language,
    ageCategory: user?.ageCategory,
  }));

  const handleSignOut = (): void => {
    sessionStorage.clear();
    router.push(appUrls.portal.signIn);

    enqueueSnackbar('successfully sign out', { variant: 'success' });
  };

  const items = (isSignIn && permission && list[permission]) || [];

  return (
    <StyledSidebar anchor='left' open={isOpen} variant='persistent'>
      <Grid justify='center' container>
        <Box my={2}>
          <Image alt='IMaxart' height={80} src={LogoImg} width={61} />
        </Box>
      </Grid>
      <List>
        {items.map(({ url, icon, text }, index) => {
          const key = `sidebar-item-${index}`;

          return url ? (
            <Link href={url} key={key} passHref>
              <Item icon={icon} text={text} />
            </Link>
          ) : (
            <Item key={key} icon={icon} text={text} />
          );
        })}
        <Item icon={<ExitToApp color='primary' />} onClick={handleSignOut} text='sign out' />
      </List>
    </StyledSidebar>
  );
};

export default Sidebar;
