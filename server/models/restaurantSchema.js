const mongoose = require("mongoose");
const Order = require("./orderSchema.js");
const User = require("./userSchema.js");


const restaurantSchema = new mongoose.Schema({
    userId:{
        type: String
    },
    adminName:{
        type:String
    },
    place:{
        type:String
    },
    rName:{
        type:String
    },
    url:{
        type:String
    },
    menuItem:[{
        
        itemName:{
            type: String
        },itemDesc:{
            type:String
        },itemPrice:{
            type: Number
        },itemUrl:{
            type: String
        }
    }]
});


const Restaurant = mongoose.model("RESTAURANT",restaurantSchema);

module.exports = Restaurant;