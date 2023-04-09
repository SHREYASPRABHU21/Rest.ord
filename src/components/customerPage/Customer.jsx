import React from 'react';
import { useState } from 'react';
import Card from '../Card';
import OrderSlide from '../restaurantPage/OrderSlide';
    
function Customer(){
    const [isEntered,setEntered ] = useState(1);
    const [isRest,setRest] = useState(0);


    function entered(){
        setEntered(0);
    }

    function custMenu(){
        setRest(1);
    }

    function custOrders(){
        setRest(0);
    }

    return(
        <div className="customer">
            <div className="rest-top">
            <h1 className='rest-name'>Hello, customer name! </h1>
                    {isEntered ?<form action="/Customer" method="post" className='rest-form'> 
                    <div className="form">
                        <input className="email input" type="text" name="Customer" />
                        <label className="label" for="Customer">Address</label>
                        <button className="signup rest-details" onClick={entered} type="submit">Enter</button>
                    </div></form>:<p className='rest-place'><strong >Delivery Address :</strong> the address. </p>
                    }                    
                     
            </div>
            <button className='rest-menu ' onClick={custMenu}>Restaurants</button>
            <button className='rest-menu' onClick={custOrders}>Your Orders</button>
            {isRest ?
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
            </div>:<div className='order-items'>
              <OrderSlide 
                page = "customer"
              />
              <OrderSlide 
                page = "customer"
               />
            </div>}

            
        </div>
    )
}

export default Customer;