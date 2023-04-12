const jwt = require("jsonwebtoken");
const User = require("./models/userSchema.js");

const auth = async (req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token,"12345678901234567890123456789012");
        console.log(verifyUser);

        const user = User.findOne({_id:verifyUser._id});
        console.log(user);

        next();
    }catch(error){
        res.status(401).send(error);
        console.log(error);
    }
}

module.exports = auth;

// .post("/",async (req,res)=>{
//     const {email,password,cpassword,restaurantName} = req.body;
//     if(email && password && cpassword && restaurantName || email && password && cpassword && !restaurantName){
//         if(!email || !password){
//             res.json({message:"fill the fields"});
//             console.log("filll the fields")
//         }
//         User.findOne({email:email}).then((userExist)=>{
//             if(userExist){
//                 res.status(422).json({message:"email already exists"});
//                 console.log("email already exists");
//             } else if (password != cpassword){
//                 res.status(422).json({error:"passwords dont match"});
//                 console.log("passwords dont match");
//             } else{
//                 const user = new User({email,password,cpassword,restaurantName});         
//             }
        
//         }).catch(err =>{console.log(err);});
    // }
    

    

// })