import mongoose from "mongoose";
import { User } from "../models/userModel.js";


const storeUser = async(req,res)=>{
   const {name , email, mobileNo, paymentType,amount,pan,address}= req.body;

   if (!name || !email || !mobileNo || !paymentType|| !amount || !address) {
      throw res.status(400).json({error:"please enter required credentials"})
   }
   
   const user = await User.create({
    name,
    email,
    mobileNo,
    paymentType,
    amount,
    address,
    pan : pan || ""
   });

   if (!user._id) {
    throw res.status(400,{error:"user not created try again"})
   }

    res.status(200).json({messege:"user saved successfully",user})
}

const getUser = async(req,res)=>{

   const users= await User.find();

   if (!users || users.length === 0) {
     return res.status(400).json({error:"user not found"});
   }
  return res.status(200).json(users);
   
}

export {
    storeUser,
    getUser
}