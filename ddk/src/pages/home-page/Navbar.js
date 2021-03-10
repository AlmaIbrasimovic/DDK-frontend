import React, {useState} from 'react'
import {Link} from  'react-router-dom'
import './HomePage.css'
import Dropdown from './Dropdown'
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from './logo.png';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { red } from '@material-ui/core/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Cobain from './cobain.jpg'
import Rick from './rick.jpg'
import Thor from './thor.jpg'
import SwiperCore, { Autoplay,Pagination, Navigation, EffectFade, EffectCube, EffectCoverflow, EffectFlip} from "swiper"
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';

SwiperCore.use([Autoplay, Pagination, Navigation,EffectCube,EffectCoverflow, EffectFlip]);
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
function Navbar() {
    function clickBurger(event){
        document.getElementsByClassName('navbar-burger')[0].classList.toggle('is-active');
        document.getElementsByClassName('navbar-menu')[0].classList.toggle('is-active');
    }
    
    function infoClick(event){
        document.getElementsByClassName('has-dropdown')[0].classList.toggle('is-active');
    }

    return (
        <>
        <div className = "navbar">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={clickBurger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            <div className = "navbar-brand">
                <img src = {logo} class="image is-96x96"/>
                <Link to ="/" className = "navbar-brand-link">CK FBiH Darivanje krvi</Link>
            </div>
            <div className="navbar-menu" id = "navMenu">
                <div className="navbar-end">
                    <Link to ="/akcije-darivanja" className="navbar-item">Akcije darivanja krvi</Link>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" id="infoDropdown" onClick={infoClick}>
                            Info
                        </a>
                        <div class="navbar-dropdown">
                            <a href = "/zasto-darovati" class="navbar-item">
                                Zašto darovati krv
                            </a>
                            <a href ="/krvne-grupe" class="navbar-item">
                                Krvne grupe
                            </a>
                            <a href = "/kako-pomaze" class="navbar-item">
                                Kako pomaže darovana krv
                            </a>
                            <a href = "/proces-darivanja" class="navbar-item">
                                Proces darivanja krvi
                            </a>
                            <a href = "/vodic" class="navbar-item">
                                Vodič za darivaoce krvi
                            </a>
                            <a href = "/faq" class="navbar-item">
                                Česta pitanja o darivanju krvi
                            </a>
                            <a href = "/rjecnik" class="navbar-item">
                                Rječnik pojmova
                            </a>
                        </div>
                    </div>
                    <Link to = "/transfuzijski-centri" className = "navbar-item">Transfuzijski centri</Link>
                    <div className = "navbar-buttons">
                        <Link to ="/login" class="button is-danger is-outlined ">
                            <span class="icon">
                                <i class="fas fa-user-alt"></i>
                            </span>
                            <span>Prijavi se</span>
                        </Link>
                        <Link to = "/kreiraj-racun" class="button is-danger is-outlined">
                            <span class="icon">
                                <i class="fas fa-user-plus"></i>
                            </span>
                            <span>Kreiraj račun</span>
                        </Link>
                    </div>                
                </div>
            </div>
        </div>       
        </>
    )
} 

export default Navbar;