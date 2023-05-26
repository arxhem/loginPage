const mongoose= require("mongoose");

const loginSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
});
//data base

const login= new mongoose.model("login",loginSchema);
module.exports=login;
