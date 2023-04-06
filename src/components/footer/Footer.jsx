import React from 'react';
import { FaInstagram,FaTwitter,FaGithub,FaLinkedin} from "react-icons/fa";
import { IconContext } from "react-icons";



function Footer(){
    return (
        <div className="footer">
            <h3>Contact Us</h3>
            <div className="icons">
            <IconContext.Provider value={{ color: "white", className: "arrow",size:"2em",style: { verticalAlign: 'middle' } }}>
                    <div className='cicons'>
                    <div className="insta">
                    <FaInstagram /> 
                    </div>
                    <div className="twitter">
                    <FaTwitter />
                    </div>    
                    <div className="github">
                    <FaGithub /> 
                    </div>    
                    <div className="linkedin">
                    <FaLinkedin /> 
                    </div>    
                        
                    </div>
            </IconContext.Provider>
            
            </div>
            <h3>Copyright@ShreyasPrabhu</h3>
        </div>
    )
}

export default Footer;
