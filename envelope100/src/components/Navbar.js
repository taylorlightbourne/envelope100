import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './UI/Assets/logo1.png';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()  => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to ="/home" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={logo} alt="Logo" width="50px" height="50px" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                                Challenges
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/binders' 
                            className='nav-links-mobile' 
                            onClick={closeMobileMenu}
                            >
                                Binders
                            </Link>
                        </li>
                    </ul>
                    <Link to="/binders">
                    {button && <button className="binder-btn" type="button">
                        Binders
                    </button>}
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
