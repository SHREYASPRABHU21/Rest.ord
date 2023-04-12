import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div className="navbar" id="navbar">
        <div className="nlogo">
            <Logo />
        </div>
        <div className="nav-contents">
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/">
                <li>Contact Us</li>
                </Link>
            </ul>
        </div>
        </div>
    )
}

export default Navbar;