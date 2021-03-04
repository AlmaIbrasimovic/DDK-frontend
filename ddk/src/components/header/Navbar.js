import React, {useState} from 'react'
import {Link} from  'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from './logo.png';

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
 
    return (
        <>
        <nav className = "navbar">
            <Link to = "/" className = "navbar-logo">
                <img src = {logo} height="63" className="logo"/>
                CK FBiH
                Darivanje krvi
            </Link>
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
        </nav>
        </>
    )
} 

export default Navbar;