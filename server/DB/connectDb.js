const mongoose = require("mongoose");


const connectDb = () => {
    return mongoose.connect(process.env.MONGO_URL).then((data) => {
        console.log(`mongoDb connect with server:${data.connection.host}`)
    })
}

module.exports=connectDb