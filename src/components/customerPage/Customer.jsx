import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card';
import OrderSlide from '../restaurantPage/OrderSlide';
import axios from "../../axios.js";

    
function Customer(){
    const [isEntered,setEntered ] = useState(1);
    const [isRest,setRest] = useState(0);
    const [isEnteredt,setEnteredt ] = useState(1);
    const [name,setName] = useState("");
    const [place,setPlace] = useState("");
    const [restaurants,setRestaurants] = useState("");

    const entered = (e)=>{
          e.preventDefault();
          axios.post("/customer",{name,place}).then((data)=>{
            console.log(data);
                  
          }).catch((error)=>alert(error.message));
          setEntered(0);
          setEnteredt(0);
          setPlace(place);
          setName(name);
    }
  
    useEffect(()=>{
      const fetchData = async ( )=>{
        const data = await axios.get("/customer").then((response)=>{
          console.log(response.data);
          setRestaurants(response);
        });
      };
      fetchData();
    },[]);

  


    function custMenu(){
        setRest(0);
    }

    function custOrders(){
        setRest(1);
    }

    return(
        <div className="customer">
            <div className="rest-top">
            <h1 className='rest-name'>Hello, customer name!</h1>
                    {isEntered ?<form method="post" className='rest-form'> 
                    <div className="form">

                        <input className="email input" onChange={(e)=>{setName(e.target.value)}} value={name} type="text" name="name" />
                        <label className="label" htmlFor="name">Name</label>
                    </div></form>:<p className='rest-place'><strong >userName:</strong>{name} </p>
                    }       
                    {isEnteredt ?<form method="post" className='rest-form'> 
                    <div className="form">
                        <input className="email input" onChange={(e)=>{setPlace(e.target.value)}} value={place} type="text" name="restaurant" />
                        <label className="label" htmlFor="restaurant">Address</label>
                    </div>
                    <button className="signup rest-details" onClick={entered} type="submit">Enter</button>
                    </form>:<p className='rest-place'><strong>Delivery Adress: </strong>{place}</p>
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
                {
                  restaurants && restaurants.data.map((restaurant) =>(
                    <Card 
                      key= {restaurant._id}
                      page = "rest"
                      bimg = {restaurant.url}
                      rname = {restaurant.rName}
                      place = {restaurant.place}

                    />
                    
                  ))
                 
                }
               
            {/*-------------------------------- restuarant list -------------------------- */}
         
         
          
          {/* restaurant items menu for customers */}
          <Card 
            page = "menu"
            bimg = ""
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