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
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ZaboravljenaLozinka from '../../pages/zaboravljena-lozinka/ZaboravljenaLozinka'

const user = {
  avatar: '/static/images/avatars/logo.png',
  title: 'Administrator'
};

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

const showModal = () => {
  document.getElementById("zaboravljenaLozinkaModal").classList.toggle('is-active')
};

const closeModal = () => {
  document.getElementById("zaboravljenaLozinkaModal").classList.toggle('is-active')
};

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const { t } = useTranslation();
  
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
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
          <NavItem
            href = '/admin'
            icon = {DashboardIcon}
            title = 'Dashboard'
          />
          <NavItem
            href = '/app/customers'
            icon = {PeopleIcon}
            title = {t('Darivaoci.1')}
          />
          <NavItem
             href = '/app/products'
             icon = {BloodGroupsIcon}
             title = 'Krvne grupe'
          />
          <NavItem
            href = '/app/kreiraj-akciju-darivanja-krvi'
            icon = {NoteAddIcon}
            title= {t('Kreiraj akciju darivanja krvi.1')}
          />
          
          <NavItem
               href = '/izvjestaji'
               icon = {AssignmentIcon}
               title = 'Izvještaji'
          />
          <NavItem
            href = '/register'
            icon = {FindInPageIcon}
            title= {t('Pretraži.1')}
          />
          <NavItem
              href = '/'
              icon= {HomeIcon}
              title= {t('Početna stranica.1')}
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
