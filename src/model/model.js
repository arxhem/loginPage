const mongoose= require("mongoose");

const EmployeeSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
  
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true

    }
});
//data base

const Registers = new mongoose.model("Registers",EmployeeSchema);

module.exports=Registers;
