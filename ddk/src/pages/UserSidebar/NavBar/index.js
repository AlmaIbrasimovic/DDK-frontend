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
import HistoryIcon from '@material-ui/icons/History';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const user = {
  avatar: '/static/images/avatars/logo.png',
  imePrezime: 'Alma Ibrašimović',
  krvnaGrupa: '0+'
};

const items = [
  {
    href: '/app/dashboard',
    icon: DashboardIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: BloodGroupsIcon,
    title: 'Akcije darivanja krvi'
  },
  {
    href: '/app/products',
    icon: HomeWorkIcon,
    title: 'Transfuzijski centri'
  },
  {
    href: '/app/account',
    icon: HistoryIcon,
    title: 'Historija darivanja krvi'
  },
  {
    href: '/',
    icon: HomeIcon,
    title: 'Početna stranica'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 300
  },
  desktopDrawer: {
    width: '256',
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 96,
    height: 96
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: '9px',
    paddingTop: '10px'
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const { t } = useTranslation();

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
          className={classes.title}
          variant="h5"
        >
          {user.imePrezime}
        </Typography>
        
        <Button  variant="outlined" size = "medium" color="secondary">Uredi profil</Button>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          <NavItem
            href = '/app/dashboard'
            icon = {DashboardIcon}
            title = 'Dashboard'
          />
          <NavItem
            href = '/app/customers'
            icon = {BloodGroupsIcon}
            title = {t('Akcije darivanja krvi.1')}
          />
          <NavItem
             href = '/app/products'
             icon = {HomeWorkIcon}
             title = 'Transfuzijski centri'
          />
          <NavItem
            href = '/app/account'
            icon = {HistoryIcon}
            title= {t('Historija darivanja krvi.1')}
          />
          <NavItem
            href = '/'
            icon = {HomeIcon}
            title = {t('Početna stranica.1')}
          />
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
