import React from 'react';
import {useState} from "react";
import Logo from '../Logo';
import { useNavigate } from "react-router-dom";
import axios from "../../axios.js";
function Login(){

    const navigate = useNavigate();


    const [restaurantName,setRestaurant] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCpassword] = useState("");

    const PostData = (e)=>{
        e.preventDefault();
        axios.post("/",{restaurantName,email,password,cpassword}).then(()=>{
            if(!restaurantName){
                navigate("/customer");
            }else{
                navigate("/restaurant");
            }
            setRestaurant("");
            setEmail("");
            setPassword("");
            setCpassword("");

        }).catch((error)=>alert(error.message));
        
    }


    // const [user,setUser] = useState({
    //     email:"",password:"",cpassword:"",restaurantName:""
    // });

    // const PostData = async (e) =>{
    //     e.preventDefault();

    //     const {
    //         email,password,cpassword,restaurantName
    //     } = user;

    //     const res = awaittch("/" fe,{
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             email,password,cpassword,restaurantName
    //         })
            
    //     });
    //     const data = await res.json();
    //     if(data.status === 422 || !data){
    //         window.alert("invalid registration");
    //         console.log("invalid registration");
    //     }else{
    //         window.alert("registration succesfull");
    //         console.log("registration succesfull");
    //         navigate("/customer");
    //     }
    // }

    // let name,value;

    // const handleInput = (e) =>{
    //     console.log(e);
    //     name = e.target.name;
    //     value = e.target.value;

    //     setUser({...user,[name]:value});
    // }

    

    const [isShow, setShow] = useState(0);
    const [isRest, setRest] = useState(0);
    const [isLogin, setLogin] = useState(0);

    function signup(){
        setShow(0);
        setRest(0);
        setLogin(0);
    }

    function login(){
        setShow(1);
        setRest(0);
        setLogin(1);
    }
    
    function restaurant(){
        setShow(0);
        setRest(1);
    }


    return (
        <>
        <span className='line'></span>
        
        <div className='login'>  
            <div className="lcontainer">
                <Logo />
            </div>
            <div className="vl"></div>

            <div className="rcontainer">
                
                <button className="sbutton abutton" onClick={signup} >Sign Up</button>
                <button className="lbutton abutton" onClick={login}>Login</button>
                <form method ="POST">
                    {isRest ? <div className="form">
                        <input className="email input" value={restaurantName} onChange={(e)=>{setRestaurant(e.target.value)}} type="text" name="restaurantName" />
                        <label className="label" htmlFor="restaurantName">Restaurant Name</label>
                    </div>: null }
                    
                    <div className="form">
                        <input className="email input" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" />
                        <label className="label" htmlFor="email">Email Address</label>
                    </div>
                    <div className="form">
                        <input className="password input" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" />
                        <label className="label" htmlFor="password">Password</label>
                    </div>
                    {isShow ? null : <div className="form">
                        <input className="password input" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} type="password" name="cpassword" />
                        <label className="label" htmlFor="cpassword">Confirm Password</label>
                    </div>} 
                    
                    {isRest?<button className="signup" onClick={PostData} type="submit">  Register </button>:
                    <button className="signup" onClick={PostData} type="submit">  SignIn </button>}
                </form> 
                {isRest ? <p className="rest-signup">Customer? <button onClick={signup} className='rsbutton'>Register Now!</button></p>:
                <p className="rest-signup">Own a restaurant? <button onClick={restaurant} className='rsbutton'>Add Your Restaurant!</button></p>}

            </div>
        </div>
        </>
    )
    
}

export default Login;

