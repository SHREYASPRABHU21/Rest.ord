const mongoose = require("mongoose");

const DB = 'mongodb+srv://ShreyasShreyas:shreyas21@cluster0.z7jsqmc.mongodb.net/restord?retryWrites=true&w=majority';

mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("connection succesfull");
}).catch((err)=>console.log(err));


