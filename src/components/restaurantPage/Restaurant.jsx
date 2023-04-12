import React from 'react';
import { useState } from 'react';
import {FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import Card from '../Card';
import OrderSlide from './OrderSlide';
import axios from "../../axios.js";


function Restaurant(){

    const [isEnteredo,setEnteredo ] = useState(1);
    const [isEnteredt,setEnteredt ] = useState(1);
    const [isMenu,setMenu ] = useState(0);
    const [isActiveForm,setActiveForm ] = useState(0);
    const [name,setName] = useState("");
    const [restaurantAdd,setRestadd] = useState("");
    


    const enteredo = (e)=>{
        e.preventDefault();

        axios.post("/restaurant",{name}).then(()=>{
            setEnteredo(0);

        }).catch((error)=>alert(error.message));
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
                    {isEnteredo ?<form method="post" className='rest-form'> 
                    <div className="form">
                        <input className="email input" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="name" />
                        <label className="label" htmlhtmlFor="name">Admin Username</label>
                        <button className="signup rest-details" onClick={enteredo} type="submit">Enter</button>
                    </div></form>:<p className='rest-place'>Owned by Admin name </p>
                    }                    
                    {isEnteredt ?<form action="/Restaurant" method="post" className='rest-form'> 
                    <div className="form">
                        <input className="email input" value={restaurantAdd} onChange={(e)=>{setRestadd(e.target.value)}} type="text" name="restaurantAdd" />
                        <label className="label" htmlFor="restaurantAdd">Restaurant Address</label>
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
            <div className="form">
                        <input className="email input" type="text" name="restaurant" />
                        <label className="label" htmlFor="restaurant">Food Name</label>
                    </div>
                    <div className="form">
                        <input className="email input" type="text" name="restaurant" />
                        <label className="label" htmlFor="restaurant">Food Description</label>
                    </div>
                    <div className="form">
                        <input className="email input" type="text" name="restaurant" />
                        <label className="label" htmlFor="restaurant">Food Price</label>
                    </div>
                    <div className="form">
                        <input className="email input" type="text" name="restaurant" />
                        <label className="label" htmlFor="restaurant">Food Image Url</label>
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