const express = require("express");
const connectDb = require("./DB/connectDb");
const notfound = require("./middleware/notFound");
const routes =require("./Routes/")
require("express-async-errors")
require('dotenv').config();
const errorHandlerMiddleware=require("./middleware/errorHandler")


const app = express();

app.use(express.json())
app.get("/", (req, res) => {
    res.send("heli")
})


//middleware
app.use(errorHandlerMiddleware)
app.use(notfound)

//port
const port = process.env.PORT || 6000
//server start
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`server run in port ${port}`)
    })
    } catch (error) {
       console.log(error)
    }
    
}

start();