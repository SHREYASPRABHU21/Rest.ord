import React from 'react';
import { useState } from 'react';
import Card from '../Card';
import OrderSlide from '../restaurantPage/OrderSlide';
import axios from "../../axios.js";

    
function Customer(){
    const [isEntered,setEntered ] = useState(1);
    const [isRest,setRest] = useState(0);
    const [isEnteredt,setEnteredt ] = useState(1);


    function enteredt(){
      setEnteredt(0);
  }
    const entered = (e)=>{
          e.preventDefault();
          axios.post("/customer",{Customer}).then(()=>{
                  setEntered(0);
          }).catch((error)=>alert(error.message));
    }
  

    function custMenu(){
        setRest(0);
    }

    function custOrders(){
        setRest(1);
    }

    return(
        <div className="customer">
            <div className="rest-top">
            <h1 className='rest-name'>Hello, customer name! </h1>
                    {isEntered ?<form method="post" className='rest-form'> 
                    <div className="form">
                        <input className="email input" type="text" name="Customer" />
                        <label className="label" htmlFor="Customer">Name</label>
                        <button className="signup rest-details" onClick={entered} type="submit">Enter</button>
                    </div></form>:<p className='rest-place'><strong >userName:</strong>UserNAme </p>
                    }       
                    {isEnteredt ?<form action="/Restaurant" method="post" className='rest-form'> 
                    <div className="form">
                        <input className="email input" type="text" name="restaurant" />
                        <label className="label" htmlFor="restaurant">Address</label>
                        <button className="signup" onClick={enteredt} type="submit">Enter</button>
                    </div></form>:<p className='rest-place'><strong>Delivery Adress: </strong>address</p>
                    }                   
                     
            </div>
            <button className='rest-menu ' onClick={custMenu}>Restaurants</button>
            <button className='rest-menu' onClick={custOrders}>Your Orders</button>
            {isRest ?<div className='order-items'>
              <OrderSlide 
                page = "customer"
              />
              <OrderSlide 
                page = "customer"
               />
            </div>
            :
            <div className="rest-list">
                <div className="menu-item-cards">
            {/*-------------------------------- restuarant list -------------------------- */}
          <Card 
            page = "rest"
            bimg = "https://burst.shopifycdn.com/photos/woman-dressed-in-white-leans-against-a-wall.jpg?width=1200&format=pjpg&exif=0&iptc=0"
            rname = "Bombay dine"
            place = 'resst osdf'

          />
          <Card 
            page = "rest"
            place = "achuth"
            bimg = "https://burst.shopifycdn.com/photos/woman-dressed-in-white-leans-against-a-wall.jpg?width=1200&format=pjpg&exif=0&iptc=0"
            rname = "Bombay dine"

          />
          
          {/* restaurant items menu for customers */}
          <Card 
            page = "menu"
            bimg = "https://burst.shopifycdn.com/photos/woman-dressed-in-white-leans-against-a-wall.jpg?width=1200&format=pjpg&exif=0&iptc=0"
            type = "non-item"
            price = "10.5"
            iname = "Bombay dine"
            desc = "jastfoihjenfiasnfsn ajfaweofdf jsdfkj"

          />
          <Card 
            page = "menu"
            bimg = "https://burst.shopifycdn.com/photos/woman-dressed-in-white-leans-against-a-wall.jpg?width=1200&format=pjpg&exif=0&iptc=0"
            type = "non-item"
            price = "10.5"
            iname = "Bombay dine"
            desc = "jastfoihjenfiasnfsn ajfaweofdf jsdfkj"

          />
          </div>
            </div>}

            
        </div>
    )
}

export default Customer;