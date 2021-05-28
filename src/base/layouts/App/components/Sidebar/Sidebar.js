import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import { node, func, string, bool } from 'prop-types';

import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

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

const Sidebar = ({ isOpen }) => (
  <StyledSidebar anchor="left" open={isOpen} variant="persistent">
    <Grid container>
      <Image alt="IMaxart" height={76} src={LogoImg} width={200} />
    </Grid>
    <List>
      {list['newbie'].map(({ url, ...rest }, index) => {
        const key = `sidebar-item-${index}`;

        return url ? (
          <Link href={url} key={key} passHref>
            <Item {...rest} />
          </Link>
        ) : (
          <Item key={key} {...rest} />
        );
      })}
    </List>
  </StyledSidebar>
);

Item.propTypes = {
  text: string,
  icon: node,
  onClick: func,
};

Sidebar.propTypes = {
  isOpen: bool,
};

export default Sidebar;
