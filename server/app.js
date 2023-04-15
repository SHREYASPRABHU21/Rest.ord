const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/userSchema.js");
const Restaurant = require("./models/restaurantSchema.js");
const Order = require("./models/orderSchema.js");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

// const auth = require("./auth.js");
// const useNavigate = require("react-router-dom");

// const navigate = useNavigate();



app.use(express.json());
// app.use(require('./auth.js'));
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
    Restaurant.find().then((data)=>{
        res.status(200).send(data);
        console.log(data);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}).post("/", (req,res)=>{
    const loginData = req.body;
    const {restaurantName,email,password,cpassword} = loginData;
    const user = new User({email,restaurantName,password,cpassword});
    

    if(email && password && cpassword && !restaurantName || email && password && cpassword && restaurantName){
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
                user.save().then((saveData)=>{
                    if(restaurantName){
                        
                        User.findOne({email:email}).then(()=>{
                            const restaurant = new Restaurant({rName:restaurantName,userId:saveData._id});
                            restaurant.save().then(()=>{
                                console.log("restaurant name and userID saved");
                            }).catch((err)=>{
                                console.log(err);
                            });
                        }).catch((err)=>{
                            console.log(err);
                        });
                    }       
                    // res.status(201).json({message: "registered succesfuly"});
                    console.log("registered succesfully");
                }).catch((err)=>{
                    res.status(422).json({error: "registration failed"})
                    console.log(err);
                })
                         
            }
            
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
                console.log("req",req.cookies.jwt);


            
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
    Restaurant.find({rName:{$ne:""}}).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}).post("/restaurant",(req,res)=>{
    const token = req.cookies.jwt;  

    const data  = jwt.verify(token,"12345678901234567890123456789012");


    const userData = User.findOne({_id:data._id}).then((data)=>{
        const adminName = req.body.name;
        const restaurantPlace = req.body.place;
        const rurl = req.body.url;
        // const restaurant = new Restaurant({userId: data._id,rName: restaurantName,url: rurl,place: restaurantPlace});
        // restaurant.save().then((ata)=>{
        //    console.log("ata",ata);
        // }).catch((err)=>{                                                             
        //    console.log(err);
        // })
        
        const fName =req.body.fName;
        const fPrice=  req.body.fPrice;
        const foodDesc = req.body.foodDesc;
        const foodImage = req.body.foodImage;
        
    Restaurant.findOneAndUpdate({userId:data._id},{adminName:adminName,place:restaurantPlace,url:rurl,$push : {menuItem :  {itemName: fName,itemDesc : foodDesc, itemPrice : fPrice,itemUrl : foodImage} }
    }).then((restExist)=>{
        console.log("user name registered");
    }).catch((err)=>{
        console.log(err)
    });
    // Restaurant.findOndAndUpdate({userId:data._id},).then((item)=>{
    //     console.log("item updated");
    //     console.log(item);
    //    }).catch((err)=>{
    //     console.log(err);
    //    })



    });
    
    
    

});
app.get("/customer",(req,res)=>{
    Restaurant.find({rName:{$ne:""}}).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(500).send(err);
    })

}).post("/customer",(req,res)=>{
    const token = req.cookies.jwt;

    const data  = jwt.verify(token,"12345678901234567890123456789012");

    const userData = User.findOne({_id:data._id}).then((data)=>{
        const customerName = req.body.name;
        const customerPlace = req.body.place;
        console.log(data,"data");
        if(data.restaurantName === ""){
            const user = new User({customerName,customerPlace});
            User.findOneAndUpdate({_id:data._id},{name:customerName,place:customerPlace}).then(()=>{
            console.log("user data registered");
            }).catch((err)=>{
            console.log(err)
        });
        }
        

    });
    
    
    

});

app.listen(5000,()=>{
    console.log("server is running on server 3000");
});