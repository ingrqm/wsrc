import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';
import { node, func, string, bool } from 'prop-types';

import { Grid, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';

import { ExitToApp } from '@material-ui/icons';

import { appUrls } from 'urls';

import { list } from './Sidebar.data';
import { StyledSidebar } from './Sidebar.styled';

import LogoImg from 'assets/images/brand.png';

// eslint-disable-next-line react/display-name
const Item = React.forwardRef(({ icon, text, onClick }, ref) => (
  <ListItem onClick={onClick} ref={ref} button>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
));

const Sidebar = ({ isOpen }) => {
  const router = useRouter();
  const [role, setRole] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleSignOut = () => {
    sessionStorage.clear();
    router.push(appUrls.portal.signIn);

    enqueueSnackbar('successfully sign out', { variant: 'success' });
  };

  useEffect(() => {
    setRole(sessionStorage.getItem('role'));
  }, []);

  const items = Object.keys(list).includes(role) ? list[role] : [];

  return (
    <StyledSidebar anchor="left" open={isOpen} variant="persistent">
      <Grid justify="center" container>
        <Box my={2}>
          <Image alt="IMaxart" height={80} src={LogoImg} width={61} />
        </Box>
      </Grid>
      <List>
        {items.map(({ url, ...rest }, index) => {
          const key = `sidebar-item-${index}`;

          return url ? (
            <Link href={url} key={key} passHref>
              <Item {...rest} />
            </Link>
          ) : (
            <Item key={key} {...rest} />
          );
        })}
        <Item icon={<ExitToApp color="primary" />} onClick={handleSignOut} text="sign out" />
      </List>
    </StyledSidebar>
  );
};

Item.propTypes = {
  text: string,
  icon: node,
  onClick: func,
};

Sidebar.propTypes = {
  isOpen: bool,
};

export default Sidebar;
