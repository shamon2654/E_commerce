const express = require("express")
const User =require("../Models/User")

const router = express.Router();

//multer
const { upload } = require("../multer");
//errorhandler
const ErrorHandler = require("../utils/errorHandler");

const path=require("path")

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    const { name, email, password } = req.body
    const userEmail = await User.findOne({ email })
    if (userEmail) {
        return next(new ErrorHandler("User already Exists",400))
    }
    const filename = req.file.filename
    const fileUrl = path.join(filename)
    const user = {
        name: name,
        email: email,
        password: password,
        avatar:fileUrl,
    }
    const newUser = await User.create(user);
    res.status(201).json({
        success: true,
        newUser:newUser,
    })
})

module.exports=router