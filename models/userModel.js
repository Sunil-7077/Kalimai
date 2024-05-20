import mongoose from "mongoose";

  const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        mobileNo:{
            type:String,
            required:true
        },
        paymentType:{
            type:String,
            required:true
        },
        pan:{
            type:String
        },
        amount:{
            type:String,
            required:[true,"please enter amount"]
        },
        address:{
            type:String,
            required:true
        }

  },{
    timestamps:true
  })

 export const User = mongoose.model("User",userSchema)