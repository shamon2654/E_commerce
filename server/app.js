const express = require("express");
const ErrorHandler = require("./middleware/Error");


const bodyParser=require("body-parser")//using to reading client side datas
 
const cors =require('cors')

const app = express();

const cookieParser = require("cookie-parser")

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));
app.use("/",express.static("uploads"))
app.use(bodyParser.urlencoded({extended:true}))

//router import
const user = require("./Controllers/user")
app.use("/api/v2",user)

//for error handling
app.use(ErrorHandler)

module.exports=app