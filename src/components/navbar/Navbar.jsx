import React from 'react';
import Logo from '../Logo';

function Navbar(){
    return (
        <div className="navbar" id="navbar">
        <div className="nlogo">
            <Logo />
        </div>
        <div className="nav-contents">
            <ul>
                <li>Home</li>
                <li>ContactUs</li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar;