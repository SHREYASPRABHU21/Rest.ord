import React from 'react';
import { useState,useEffect } from 'react';
import {FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import Card from '../Card';
import OrderSlide from './OrderSlide';
import axios from "../../axios.js";
import Img from "../../img/test.jpg";


function Restaurant(){
    const [isEntered,setEntered ] = useState(1);
    const [isEnteredi,setEnteredi ] = useState(1);
    const [isEnteredt,setEnteredt ] = useState(1);
    const [isMenu,setMenu ] = useState(0);
    const [isActiveForm,setActiveForm ] = useState(0);
    const [name,setName] = useState("");
    const [place,setPlace] = useState("");
    const [url,setUrl] = useState("");
    const [restaurants,setRestaurants] = useState("");


    
    // const enteredi = (e)=>{
    //   e.preventDefault();
    //   axios.post("/restaurant",{url}).then((data)=>{
    //     console.log(data);
              
    //   }).catch((error)=>alert(error.message));
    //   setEnteredi(0);
    //           setUrl(url);  
    //   }

    const entered = (e)=>{
        e.preventDefault();
        if(!place || !name || !url){
          console.log("enter details completely");
        }else{
          axios.post("/restaurant",{name,url,place}).then((data)=>{
            console.log(data);    
          }).catch((error)=>alert(error.message));         
          setEntered(0);
          setEnteredi(0);
          setEnteredt(0);
          setPlace(place);
          setUrl(url);  
          setName(name);
        }
        
  }

  useEffect(()=>{
    const fetchData = async ( )=>{
      const data = await axios.get("/restaurant").then((response)=>{
        console.log(response.data);
        setRestaurants(response);
      });
    };
    fetchData();
  },[]);

  // const enteredt = (e)=>{
  //   e.preventDefault();
  //   axios.post("/restaurant",{place}).then((data)=>{
  //     console.log(data);
            
  //   }).catch((error)=>alert(error.message));
  //   setEnteredt(0);
  //           setPlace(place);
  // }

    function menu(){
        setMenu(1);
    }
    function orders(){
        setMenu(0);
    }
    function itemForm(){
      setActiveForm(1);
    }

    const [fName,setFname] = useState("");
    const [foodDesc, setFoodDesc] = useState("");
    const [fPrice,setFprice] = useState("");
    const [foodImage,setfoodImage] = useState("");

    const citemForm = (e)=>{
      e.preventDefault();

      if(!fName || !foodDesc || !fPrice || !foodImage){
        console.log("enter details completely");
      }else{
        axios.post("/restaurant",{fName,foodDesc,fPrice,foodImage}).then((data)=>{
          console.log("y");    
        }).catch((error)=>alert(error.message));         
        setFname("");
        setFoodDesc("");  
        setFprice("");
        setfoodImage("");
        setActiveForm(0);
      }

      
}

    return(
        <div className="restaurant">
            <div className="rest-top">
            <h1 className='rest-name'>Restaurant Name</h1>
                    {isEntered ?<form method="post" className='rest-form'> 
                    <div className="form">
                        <input className="email input" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="name" />
                        <label className="label" htmlhtmlFor="name">Admin Username</label>
                    </div></form>:<p className='rest-place'>Owned by {name}</p>
                    }                    
                    {isEnteredt ?<form  method="post" className='rest-form'> 
                    <div className="form">
                        <input className="email input" value={place} onChange={(e)=>{setPlace(e.target.value)}} type="text" name="restaurantAdd" />
                        <label className="label" htmlFor="restaurantAdd">Restaurant Address</label>
                    </div></form>:<p className='rest-place'>Restaurant Address: {place} </p>
                    }     
                    {isEnteredi ?<form method="post" className='rest-form'> 
                    <div className="form">
                        <input className="email input" value={url} onChange={(e)=>{setUrl(e.target.value)}} type="text" name="url" />
                        <label className="label" htmlFor="url">Restaurant Image URL</label>
                    </div>
                    <button className="signup rest-details" onClick={entered} type="submit">Enter</button>
                    </form>:null

                    } 
                    
            </div>
            <button className='rest-menu ' onClick={menu}>Menu</button>
            <button className='rest-menu' onClick={orders}  >Orders</button>
            {isMenu ? 
            <div className="menu-items">

          <div className="menu-item-cards">
               {/* {
                  restaurants && restaurants.data.map((restaurant,index) =>(
                    <Card 
                      key= {restaurant._id}
                      page = "rest"
                      bimg = {restaurant.url}
                      iname = {restaurant.menuItem.itemPrice}
                      place = {restaurant.place}

                    />
                    
                  ))
                 
                } */}
          <Card 
            page = "menu"
            type = "item"
            bimg = {Img}
            
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
            <form method ="post">
            <h1 style={{textAlign:"center",margin:0}}> Food Details!</h1>
            <div className="form">
                        <input className="email input" value={fName} onChange={(e)=>{setFname(e.target.value)}} type="text" name="fName" />
                        <label className="label" htmlFor="fName">Food Name</label>
                    </div>
                    <div className="form">
                        <input className="email input" value={foodDesc} onChange={(e)=>{setFoodDesc(e.target.value)}}  type="text" name="foodDesc" />
                        <label className="label" htmlFor="foodDesc">Food Description</label>
                    </div>
                    <div className="form">
                        <input className="email input"  value={fPrice} onChange={(e)=>{setFprice(e.target.value)}} type="text" name="fPrice" />
                        <label className="label" htmlFor="fPrice">Food Price</label>
                    </div>
                    <div className="form">
                        <input className="email input" value={foodImage} onChange={(e)=>{setfoodImage(e.target.value)}} type="text" name="foodImage" />
                        <label className="label" htmlFor="foodImage">Food Image Url</label>
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