import React, {useState} from 'react'
import {Link,NavLink} from  'react-router-dom'
import './HomePage.css'
import Button from '@material-ui/core/Button';
import logo from './logo.png';
import 'swiper/swiper.scss';
import {makeStyles} from '@material-ui/core';  
import SwiperCore, { Autoplay,Pagination, Navigation, EffectFade, EffectCube, EffectCoverflow, EffectFlip} from "swiper"
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

SwiperCore.use([Autoplay, Pagination, Navigation,EffectCube,EffectCoverflow, EffectFlip]);

function Navbar() {
    const [loggedIn, setLoggedIn] = React.useState('')
    
    const { t } = useTranslation();
    function handleClickLanguage(lang) {
        i18next.changeLanguage(lang)
        document.getElementsByClassName('has-dropdown')[1].classList.toggle('is-active');
    }

    React.useEffect(() => {
        setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")))
        console.log(loggedIn)
      }, []);
    
    function clickBurger(event){
        document.getElementsByClassName('navbar-burger')[0].classList.toggle('is-active');
        document.getElementsByClassName('navbar-menu')[0].classList.toggle('is-active');
    }
    
    function infoClick(event){
        document.getElementsByClassName('has-dropdown')[0].classList.toggle('is-active');
    }
    
    function languageClick(event){
        document.getElementsByClassName('has-dropdown')[1].classList.toggle('is-active');
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
                    <Link to ="/akcije-darivanja" className="navbar-item">{t('Akcije darivanja krvi.1')}</Link>
                    <Link to = "/transfuzijski-centri" className = "navbar-item">Transfuzijski centri</Link>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" id="infoDropdown" onClick={infoClick}>
                            Info
                        </a>
                        <div class="navbar-dropdown">
                            <a href = "/zasto-darovati" class="navbar-item">
                                Zašto {t('darivati.1')} krv
                            </a>
                            <a href ="/krvne-grupe" class="navbar-item">
                                Krvne grupe
                            </a>
                    
                            <a href = "/proces-darivanja" class="navbar-item">
                                Proces {t('darivanja.1')} krvi
                            </a>
                            
                            <a href = "/faq" class="navbar-item">
                                Česta pitanja o {t('darivanju.1')} krvi
                            </a>
                            <a href = "/rjecnik" class="navbar-item">
                                Riječnik pojmova
                            </a>
                            <a href = "/admin" class="navbar-item">
                                Admin dashboard
                            </a>
                            <a href = "/user" class="navbar-item">
                                User profile
                            </a>
                        </div>
                    </div>
                    
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" id="languageDropdown" onClick={languageClick}>
                            Odaberite jezik
                        </a>
                        <div class="navbar-dropdown">
                            <Button onClick={()=>handleClickLanguage('bos')}>Bosanski</Button>
                            <Button onClick={()=>handleClickLanguage('hr')}>Hrvatski</Button>
                        </div>
                    </div>
                    {loggedIn == 0 &&
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
                    }
                    {loggedIn == 1 && JSON.parse(localStorage.getItem("rola")) == "korisnik" &&
                        <div className = "navbar-buttons">
                        <Link to ="/user" class="button is-danger is-outlined ">
                            <span class="icon">
                                <i class="fas fa-user-alt"></i>
                            </span>
                        <span>Profil</span>
                        </Link>
                        
                    </div>
                    }
                    {loggedIn == 1 && JSON.parse(localStorage.getItem("rola")) == "administrator" &&
                        <div className = "navbar-buttons">
                        <Link to ="/admin" class="button is-danger is-outlined ">
                            <span class="icon">
                                <i class="fas fa-user-alt"></i>
                            </span>
                        <span>Profil</span>
                        </Link>
                    </div>
                    }                
                </div>
            </div>
        </div>       
        </>
    )
} 

export default Navbar;