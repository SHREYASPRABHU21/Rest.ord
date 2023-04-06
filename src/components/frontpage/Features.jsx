import React from 'react';
import { IconContext } from "react-icons";



function Features(props){
    
    return(
        <div className="features">
            <div className="aicon">
            <IconContext.Provider value={{ color: " #fc9700", className: "global-class-name",style: { verticalAlign: 'middle' },size:"2.5em" }}>
                <div>
                    {props.icon}
                </div>
            </IconContext.Provider></div>
            <h2 className="fhead">{props.headtext}</h2>
            <p className="fdesc">{props.description}</p>
        </div>
    )
}

export default Features;