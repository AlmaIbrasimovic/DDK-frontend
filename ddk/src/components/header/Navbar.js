import React, {useState} from 'react'
import {Link} from  'react-router-dom'
import './Navbar.css'
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
SwiperCore.use([Autoplay, Pagination, Navigation,EffectCube,EffectCoverflow, EffectFlip]);

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown (true)
        }
        else {
            setDropdown (true)
        }
    }

    
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown (false)
        }
        else {
            setDropdown (false)
        }
    }
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
                <p>CK FBiH Darivanje krvi</p>
            </div>
            <div className="navbar-menu" id = "navMenu">
                <div className="navbar-end">
                    <a className="navbar-item">Akcije darivanja krvi</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" id="infoDropdown" onClick={infoClick}>
                            Info
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Zašto darivati krv
                            </a>
                            <a class="navbar-item">
                                Krvne grupe
                            </a>
                            <a class="navbar-item">
                                Kako pomaže darovana krv
                            </a>
                            <a class="navbar-item">
                                Proces darivanja krvi
                            </a>
                            <a class="navbar-item">
                                Vodič za darivaoce krvi
                            </a>
                            <a class="navbar-item">
                                Česta pitanja o darivanju krvi
                            </a>
                            <a class="navbar-item">
                                Rječnik pojmova
                            </a>
                        </div>
                    </div>
                    <a className = "navbar-item">Transfuzijski centri</a>
                    <button class="button is-danger is-outlined">
                        <span class="icon">
                            <i class="fas fa-user-alt"></i>
                        </span>
                        <span>Prijavi se</span>
                    </button>
                </div>
            </div>
        </div>
  
        <section class="hero is-fullheight">
            <Swiper className = "coverImage"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation
                effect="coverflow"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <img src={Thor}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src = {Cobain}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Rick}></img>
                </SwiperSlide>
            
                
            </Swiper>
        
        </section>
        {/* 
        <nav className = "navbar">
            <div className="navbar-div">
            <Link to = "/" className = "navbar-logo">
                <img src = {logo} height="63" className="logo"/>
               <p>CK FBiH
                Darivanje krvi</p> 
            </Link>
            </div>
           
            <div className = "menu-icon" onClick={handleClick}>
                <i className = {click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className = {click ? "nav-menu active" : "nav-menu"}>
                <li className = "nav-item">
                    <Link to = "/" className = "nav-links" onClick = {closeMobileMenu}>
                        Centri
                    </Link>
                </li>
                <li 
                    className = "nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to = "/info" className = "nav-links" onClick = {closeMobileMenu}>
                        Info <i className = "fas fa-caret-down"/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className = "nav-item">
                    <Link to = "/kontakt" className = "nav-links" onClick = {closeMobileMenu}>
                        Kontakt
                    </Link>
                </li>
                <li className = "nav-item">
                    <a href = "https://bhavaniravi.medium.com/reactjs-buttons-cheatsheet-3d830533ac90" className = "nav-links">
                        Prijavi se
                        <i className="fas fa-user-alt"/>
                    </a>
                </li>

            </ul>
        </nav>*/}
        </>
    )
    
    
} 

export default Navbar;