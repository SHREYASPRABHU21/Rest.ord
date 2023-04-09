const express = require("express");
const app = express();
const mongoose = require("mongoose");

// mongo Mongo@Shreyas21 mongodb+srv://shreyasprabhu21:<password>@cluster0.3renwcy.mongodb.net/?retryWrites=true&w=majority ShreyasShreyas shreyas21
const DB = 'mongodb+srv://ShreyasShreyas:shreyas21@cluster0.z7jsqmc.mongodb.net/restord?retryWrites=true&w=majority';

mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("connection succesfull");
}).catch((err)=>console.log(err));


// Middle ware
const middleware = (req,res,next)=>{
    console.log("i'm middleware");
    next();
}

/* https requests and response */

app.get("/",(req,res)=>{
    res.send("home");
})

app.get("/restaurant",middleware,(req,res)=>{
    res.send("restaurant");
})

app.get("/customer",(req,res)=>{
    res.send("customer")
})

app.listen(3000,()=>{
    console.log("server is running on server 3000");
});