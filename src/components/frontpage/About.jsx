import React from 'react';
import Logo from '../Logo';
import {FaArrowCircleDown } from "react-icons/fa";
import { IconContext } from "react-icons";


function About(){
    return(
        <div className="about">
            <div className="atext">
                <Logo />
                <h3>Order<span style={{color:"greenyellow"}}> . </span>Eat<span style={{color:"greenyellow"}}> . </span>Order Again</h3>
                <h2>Hungry?    <span style={{color:"greenyellow"}}>   Register Now  
                
                <IconContext.Provider value={{ color: "greenyellow", className: "arrow",size:"1em",style: { verticalAlign: 'middle' } }}>
                    <div className='arrow'>
                        <FaArrowCircleDown />
                    </div>
                </IconContext.Provider></span> </h2>

            </div>
           
        </div>
    )
}

export default About;
