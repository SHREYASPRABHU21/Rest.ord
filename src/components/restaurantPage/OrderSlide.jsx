import React from 'react';
import { FaRupeeSign,FaMinusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

function OrderSlide(props){
    var page = props.page; 
    return(
        <div className="order-slide">
            <div className="orders-left">
            <h2 className='o-username'> User Name</h2>
            <h3 className="o-place">Address</h3>
            <div className="orders-item-box">
            <h2 className="o-item-heading">Ordered Items :</h2>
            <ol className='o-list'>
                <li className='o-items'>Dosa<IconContext.Provider value={{ color: "red", className: "arrow",size:"1.2em",style: { verticalAlign: 'middle' } }}>
                       <div className="minus">
                        < FaMinusCircle/>
                        </div>
                </IconContext.Provider></li>
                <li className='o-items'>Idle-vada</li>
                <li className='o-items'>Chicken Biryani And Kabab</li>
                <li className='o-items'>8 Shawarma Rolls</li>
                <li className='o-items'>Strawberry milkshake</li>
                <li className='o-items'>Chocklate Icecream</li>
            </ol>
            </div>
            </div>
            <div className="orders-right">
            <h3 className='orders-total'>Total  : <div className="price">
                <IconContext.Provider value={{ color: "grey", className: "arrow",size:".7em",style: { verticalAlign: 'middle' } }}>
                    <div className='rupees'>
                        <FaRupeeSign />
                    </div>
                </IconContext.Provider>31.5</div></h3>
                {page == "customer" ?<div > <button className='accept-button o-button'>Confirm</button>
                <button className='reject-button o-button'>Delete</button></div>: <div > <button className='accept-button o-button'>Accept</button>
                <button className='reject-button o-button'>Reject</button></div>}
                
            </div>
        </div>
    )
}

export default OrderSlide;