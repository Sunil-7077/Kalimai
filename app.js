import express from "express"
import { config } from "dotenv"
import cors from "cors"
import paymentRoute from "./routes/paymentRoutes.js";
import {SendEmail} from "./utils/SendMail.js";
config({path:"./config/config.env"})

export const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/api",paymentRoute)
SendEmail("subhe@gmail.com",'12343254');

//http://localhost:4000/api/paymentVarification

app.get("/api/getkey",(req,res)=>
    res.status(200).json({key:process.env.RAZORPAY_API_KEY})
)