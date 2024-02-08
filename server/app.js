const express = require("express");
const ErrorHandler = require("./middleware/Error");

const app = express();




//for error handling
app.use(ErrorHandler)

module.exports=app