const express = require("express");
const ErrorHandler = require("./middleware/Error");


const bodyParser=require("body-parser")//using to reading client side datas


const app = express();

const cookieParser = require("cookie-parser")

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))



//for error handling
app.use(ErrorHandler)

module.exports=app