import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import LogOut from '@material-ui/icons/Input';
import './UserSidebar.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useHistory } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(() => ({
  root: {
    width:'100%',
  },

  avatar: {
    width: 60,
    height: 60
  }
}));

const UserSidebar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  
  const classes = useStyles();
  const [notifications] = useState([]);
  const history = useHistory();

  function logOut(){
    localStorage.removeItem("rola");
    localStorage.removeItem("userID");
    localStorage.setItem("loggedIn", false)
    history.push('/')
  }

  function handleClickLanguage(lang) {
   
    i18next.changeLanguage(lang)
    if(i18next.language == "bos") {
      document.getElementById("button-bos").style.textDecoration = "underline";
      document.getElementById("button-hrv").style.textDecoration = "none";
    } 
    else if (i18next.language == "hr") {
      document.getElementById("button-bos").style.textDecoration = "none";
      document.getElementById("button-hrv").style.textDecoration = "underline";
    }
  }

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
        </RouterLink>
        <Box flexGrow={1} />
          <button id = "button-bos" onClick={()=>handleClickLanguage('bos')} class="button is-ghost">Bosanski</button>
          <button id = "button-hrv" onClick={()=>handleClickLanguage('hr')} class="button is-ghost">Hrvatski</button>
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={()=>logOut()} color="inherit">
            <LogOut />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

UserSidebar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default UserSidebar;
