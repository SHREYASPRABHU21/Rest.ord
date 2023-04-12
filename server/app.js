const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/userSchema.js");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const auth = require("./auth.js");

app.use(express.json());
app.use(require('./auth.js'));
require("./db/conn.js");
app.use(cors());
app.use(cookieParser());


// mongo Mongo@Shreyas21 mongodb+srv://shreyasprabhu21:<password>@cluster0.3renwcy.mongodb.net/?retryWrites=true&w=majority ShreyasShreyas shreyas21


// Middle ware
const middleware = (req,res,next)=>{
    console.log("i'm middleware");
    next();
}

/* https requests and response */

app.get("/",(req,res)=>{
    res.send("home");
    console.log("homemmmm");
}).post("/", (req,res)=>{
    const loginData = req.body;
    const {restaurantName,email,password,cpassword} = loginData;
    const user = new User({email,restaurantName,password,cpassword});


    if(email && password && cpassword || email && password && cpassword && restaurantName){
        User.findOne({email:email}).then((userExist)=>{
            if(userExist){
                res.status(500).send("Email already exists");
                console.log("Email already exists");
            }else if(password != cpassword){
                
                res.status(500).send("Passwords dont match");
                console.log("Passwords dont match");
            }else{
                const token = user.generateAuthToken();
                res.cookie("jwt",token);

                console.log("registered succesfully");
                user.save().then(()=>{
                    res.status(201).json({message: "registered succesfuly"});
                    console.log("registered succesfully");
                }).catch((err)=>{
                    res.status(422).json({error: "registration failed"})
                    console.log(err);
                })
            }
            // if(!restuarant){
            //     useNavigate.Navigate("/customer");
            // }else{
            //     useNavigate.Navigate("/restaurant");
            // }
        }).catch((err)=>{
            console.log(err);
        })
    }else if(!cpassword && !restaurantName && email && password){
        // const userLogin = User.findOne({email:email});
        User.findOne({email: email })
        .then((userLogin)=>{
            if(userLogin){
                if(password != userLogin.password){
                    res.json({error: "wrong password"});
                    console.log("wrong password");
                }else{
                    const token = userLogin.generateAuthToken();
                res.cookie("jwt",token);
                console.log(req.cookies.jwt);


                    res.json({message: "user login successfull"});
                    console.log("login succesfull ");
                }
            }else{
                res.json({message : "invalid credentials"});
                console.log("invalid credentials");
            }
            
        }).catch((err)=>{console.log(err);});

        };
        // const isMatch = bcrypt.compare(password, userLogin.password);
        // console.log(userLogin);
        
        // if(userLogin){
        //     const match = bcrypt.compare(password,userLogin.password);
        //     if (match) {
        //         res.send("login successful")
        //     }else{
        //         res.send("wrong password")
        //     }
        // }
        
        }
    


    
)


app.get("/restaurant",(req,res)=>{
    res.send("restaurant");
}).post("/restaurant",(req,res)=>{
    const token = req.cookies.jwt;
    const data  = jwt.verify(token,"12345678901234567890123456789012");
    console.log(data);

    const user = User.findOne({_id:data._id});
    console.log(user);
    

})

app.get("/customer",auth,(req,res)=>{
    res.send("customer");
}).post("/customer",auth,(req,res)=>{
    const token = req.cookies.jwt;
    console.log(token);

    const data  = jwt.verify(token,"12345678901234567890123456789012");
    console.log(data);

    const user = User.findOne({_id:data._id});
    console.log(user);
    
    const customer = req.body.Customer;
    console.log(customer);


})

app.listen(5000,()=>{
    console.log("server is running on server 3000");
});