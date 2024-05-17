import React from 'react';
import logo from '../../../assets/logo.png'
import Navigation from '../Navigation/Navigation'; 
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <Navigation />
        </header>
    );
}

export default Header;
