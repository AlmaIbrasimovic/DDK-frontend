import React, { useState, useEffect } from "react";
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
import UrediProfil from '../../../components/account/UrediProfil'
import './navBar.css'
import axios from 'axios'
import {toast} from 'react-toastify';

const user = {
  avatar: '/static/images/avatars/logo.png',

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
    width: 256,
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
  const [imePrezime, setImePrezime] = React.useState()
  const { t } = useTranslation();

 
  const showModal = () => {
    document.getElementById("urediProfilModal").classList.toggle('is-active')
  };

  const closeModal = () => {
    document.getElementById("urediProfilModal").classList.toggle('is-active')
  };
  
  useEffect(() => {
    axios.get(`http://localhost:8080/korisnici/${JSON.parse(localStorage.getItem("userID"))}`, {
    }).then(response => {
       setImePrezime(response.data.ime + " " + response.data.prezime)
    }).catch(err => {
      toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
    })
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
          className={classes.title}
          variant="h5"
        >
          {imePrezime}
        </Typography>
        <Button  variant="outlined" size = "medium" color="secondary" onClick={showModal}>Uredi profil</Button>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          <NavItem
            href = '/user'
            icon = {DashboardIcon}
            title = 'Dashboard'
          />
          <NavItem
            href = '/akcije-darivanja'
            icon = {BloodGroupsIcon}
            title = {t('Akcije darivanja krvi.1')}
          />
          <NavItem
             href = '/transfuzijski-centri'
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
      <div id ="urediProfilModal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Uredi profil</p>
          <button class="delete" aria-label="close" onClick={closeModal}></button>
        </header>
        <section class="modal-card-body">
            <UrediProfil/>
        </section>      
      </div>
    </div>
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
