import React from 'react';
import Img from "../img/test.jpg";
import { FaRupeeSign } from "react-icons/fa";
import { IconContext } from "react-icons";


function Card(props){
    var page = props.page;
    var type = props.type;
    console.log(props.iname);
    console.log(props.rname);
    return(
        
        <div className="card" >
        <div className='card-main' >
            <div className="cimg" >
                <img src={props.url} className='card-image' alt="img" />
            </div>
            {page == "rest" ? 
            <div className='rest'>
                <p className='rname iname'>{props.rname}</p>
                <p className='rplace idesc'>{props.place} </p>
            </div>:
            <div className="card-details">
            <div className="card-info">              
                <h2 className='iname'>{props.iname}</h2>
                <p className='idesc'>{props.desc}</p>
                </div>  
                <div className='menu-items-card'>
                <div className="price">
                <IconContext.Provider value={{ color: "grey", className: "arrow",size:".7em",style: { verticalAlign: 'middle' } }}>
                <div className='rupees'>
                        <FaRupeeSign />
                        </div>
                </IconContext.Provider>{props.price}
                </div>
                
                {
                    type == "item" ? <button className='acart' style={{backgroundColor:"red"}}>Delete</button> : <button className='acart'>Add to Cart</button>
                }
                
                
                
            </div>
            </div>}
        </div>
        </div>
    )

}

     

export default Card;

// style={{backgroundImage: `url(${Img})`}}