import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
   username:{type:String,required:true,unique:true,minLength:3,trim:true} ,
   
   userpass:{
    type:String,required:true,trim:true
   }
})
const userModel=mongoose.model("user",userSchema);
export default userModel;