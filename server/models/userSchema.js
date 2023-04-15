const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Order = require("./orderSchema")
const Restaurant = require("./restaurantSchema.js");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    },
    cpassword:{
        type: String
    },
    restaurantName:{
        type: String
    }
    ,tokens:[{
        token:{
            type: String,
            required:true
        }
    }],
    name:{
        type: String
    },
    place:{
        type:String
    }
});

userSchema.methods.generateAuthToken =  function(){
    try{
        const token = jwt.sign({_id:this._id.toString()},"12345678901234567890123456789012");
        console.log(this._id);
        this.tokens = this.tokens.concat({token:token});
        return token;
    }catch(err){
        res.send(err);
    }
}

// hashing

// userSchema.pre("save", function(next){
//     if(this.isModified("password")){
//         this.password  =  bcrypt.hash(this.password, 12);
//         this.cpassword  =  bcrypt.hash(this.cpassword, 12);
//     }
// })

const User = mongoose.model("USER",userSchema);

module.exports = User;