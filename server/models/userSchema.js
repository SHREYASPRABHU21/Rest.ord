const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    email:{
        type: "string",
        required : true
    },
    password:{
        type: "string",
        required : true
    },
    cpassword:{
        type: "string"
    },
    restaurantName:{
        type: "string"
    },
    name:{
        type: "string"
    },
    place:{
        type:"string"
    },tokens:[{
        token:{
            type: "string",
            required:true
        }
    }]

});

userSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id.toString()},"12345678901234567890123456789012");
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