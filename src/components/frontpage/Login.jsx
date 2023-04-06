import React from 'react';
import {useState} from "react";
import Logo from '../Logo';

function Login(){
    const [isShow, setShow] = useState(0);
    const [isRest, setRest] = useState(0);

    function signup(){
        setShow(0);
        setRest(0);
    }

    function login(){
        setShow(1);
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
            <div class="vl"></div>

            <div className="rcontainer">
                
                <button className="sbutton abutton" onClick={signup} >Sign Up</button>
                <button className="lbutton abutton" onClick={login}>Login</button>
                <form action = "/" method ="post">
                    {isRest ? <div class="form">
                        <input class="email input" type="text" name="restaurant" />
                        <label class="label" for="restaurant">Restaurant Name</label>
                    </div>: null }
                    
                    <div class="form">
                        <input class="email input" type="email" name="email" />
                        <label class="label" for="email">Email Address</label>
                    </div>
                    <div class="form">
                        <input class="password input" type="password" name="password" />
                        <label class="label" for="password">Password</label>
                    </div>
                    {isShow ? null : <div class="form">
                        <input class="password input" type="password" name="cpassword" />
                        <label class="label" for="cpassword">Confirm Password</label>
                    </div>} 
                    
                    <button className="signup" type="submit">{isRest ? "Register" : "Signup"}</button>
                </form> 
                {isRest ? <p className="rest-signup">Customer? <button onClick={signup} className='rsbutton'>Register Now!</button></p>:
                <p className="rest-signup">Own a restaurant? <button onClick={restaurant} className='rsbutton'>Add Your Restaurant!</button></p>}

            </div>
        </div>
        </>
    )
    
}

export default Login;

