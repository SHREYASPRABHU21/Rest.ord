import React from 'react';
import { useState } from 'react';
import {FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import Card from '../Card';
import OrderSlide from './OrderSlide';


function Restaurant(){

    const [isEnteredo,setEnteredo ] = useState(1);
    const [isEnteredt,setEnteredt ] = useState(1);
    const [isMenu,setMenu ] = useState(0);
    const [isActiveForm,setActiveForm ] = useState(0);


    function enteredo(){
        setEnteredo(0);
    }
    function enteredt(){
        setEnteredt(0);
    }
    function menu(){
        setMenu(1);
    }
    function orders(){
        setMenu(0);
    }
    function itemForm(){
      setActiveForm(1);
    }
    function citemForm(){
      setActiveForm(0);
    }

    return(
        <div className="restaurant">
            <div className="rest-top">
            <h1 className='rest-name'>Restaurant Name</h1>
                    {isEnteredo ?<form action="/Restaurant" method="post" className='rest-form'> 
                    <div class="form">
                        <input class="email input" type="text" name="restaurant" />
                        <label class="label" for="restaurant">Admin Username</label>
                        <button className="signup rest-details" onClick={enteredo} type="submit">Enter</button>
                    </div></form>:<p className='rest-place'>Owned by Admin name </p>
                    }                    
                    {isEnteredt ?<form action="/Restaurant" method="post" className='rest-form'> 
                    <div class="form">
                        <input class="email input" type="text" name="restaurant" />
                        <label class="label" for="restaurant">Restaurant Address</label>
                        <button className="signup" onClick={enteredt} type="submit">Enter</button>
                    </div></form>:<p className='rest-place'>Restaurant place </p>
                    }         
            </div>
            <button className='rest-menu ' onClick={menu}>Menu</button>
            <button className='rest-menu' onClick={orders}  >Orders</button>
            {isMenu ? 
            <div className="menu-items">

          <div className="menu-item-cards">
          
          <Card 
            page = "menu"
            type = "item"
            bimg = "https://burst.shopifycdn.com/photos/woman-dressed-in-white-leans-against-a-wall.jpg?width=1200&format=pjpg&exif=0&iptc=0"
            
            price = "10.5"
            iname = "Bombay dine"
            desc = "jastfoihjenfiasnfsn ajfaweofdf jsdfkj"

          />
          <Card 
            page = "menu"
            bimg = "https://burst.shopifycdn.com/photos/woman-dressed-in-white-leans-against-a-wall.jpg?width=1200&format=pjpg&exif=0&iptc=0"
            type = "item"
            price = "10.5"
            iname = "Bombay dine"
            desc = "jastfoihjenfiasnfsn ajfaweofdf jsdfkj"

          />
          
          </div>
          <div className='add-item'>
                        <button onClick={itemForm} className="acart">Add item</button>
            </div>
            {isActiveForm ?<div className="item-form">
            <form action = "/Restaurant" method ="post">
            <h1 style={{textAlign:"center",margin:0}}> Food Details!</h1>
            <div class="form">
                        <input class="email input" type="text" name="restaurant" />
                        <label class="label" for="restaurant">Food Name</label>
                    </div>
                    <div class="form">
                        <input class="email input" type="text" name="restaurant" />
                        <label class="label" for="restaurant">Food Description</label>
                    </div>
                    <div class="form">
                        <input class="email input" type="text" name="restaurant" />
                        <label class="label" for="restaurant">Food Price</label>
                    </div>
                    <div class="form">
                        <input class="email input" type="text" name="restaurant" />
                        <label class="label" for="restaurant">Food Image Url</label>
                    </div>
                    
                    <button className="signup" onClick={citemForm} type="submit">Submit</button>
                </form> 
            </div>: null}
            
            </div>:<div className='order-items'>
              <OrderSlide />
              <OrderSlide />
            </div>}
            
            
            
        </div>
    )
}

export default Restaurant;