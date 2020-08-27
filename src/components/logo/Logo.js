import React from 'react';
import logo from '../../images/react.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="header_container">
                <img src={logo} alt=""/>
        </div>
    );
};

export default Logo;