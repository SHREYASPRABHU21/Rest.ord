const mongoose = require("mongoose");
const Restaurant = require("./restaurantSchema.js");
const User = require("./userSchema.js");



const orderSchema = new mongoose.Schema({
    userId:{
        type: "string"
    },orderList:[{
        restaurantDetails:{
            type: mongoose.ObjectId,
            ref: 'Restaurant'
    }
    }]

});


const Order = mongoose.model("ORDER",orderSchema);

module.exports = Order;