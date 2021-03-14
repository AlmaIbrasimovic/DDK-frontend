import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';

import NavItem from './NavItem';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BloodGroupsIcon from '@material-ui/icons/InvertColors';
import PeopleIcon from '@material-ui/icons/People';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';
const user = {
  avatar: '/static/images/avatars/logo.png',
  title: 'Administrator'
};

const items = [
  {
    href: '/app/dashboard',
    icon: DashboardIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: PeopleIcon,
    title: 'Donori'
  },
  {
    href: '/app/products',
    icon: BloodGroupsIcon,
    title: 'Krvne grupe'
  },
  {
    href: '/app/account',
    icon: NoteAddIcon,
    title: 'Kreiraj akciju darivanja krvi'
  },
  {
    href: '/app/settings',
    icon: HomeWorkIcon,
    title: 'Unesi novi transfuzijski centar'
  },
  {
    href: '/login',
    icon: AssignmentIcon,
    title: 'Izvještaji'
  },
  {
    href: '/register',
    icon: FindInPageIcon,
    title: 'Pretraži'
  },
  {
    href: '/',
    icon: HomeIcon,
    title: 'Početna stranica'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 96,
    height: 96
  },
  
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          src={user.avatar}
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />    
      </Box>
    
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
