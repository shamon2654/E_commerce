const express = require("express")
const User = require("../Models/User")

const router = express.Router()

//multer
const { upload } = require("../multer")
//errorhandler
const ErrorHandler = require("../utils/errorHandler")

const path = require("path")
const fs = require("fs")
const jwt = require("jsonwebtoken")
const sendMail = require("../utils/sendMail")

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const userEmail = await User.findOne({ email })
    if (userEmail) {
      const fileName = req.file.filename
      const filePath = `uploads/${fileName}`

      fs.unlink(filePath, (err) => {
        if (err) {
          res.status(500).json({ message: "Error in Deleting File" })
        } else {
          res.json({ message: "File Deleted Successfully" })
        }
      })

      return next(new ErrorHandler("User already Exists", 400))
    }
    const filename = req.file.filename
    const fileUrl = path.join(filename)
    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    }
    const activationToken = createActivationToken(user)
    const activationUrl = `http://localhost:5173/activation/${activationToken}`
    try {
      await sendMail({
        email: user.email,
        subject: "Activate Your Account",
        message: `Hello ${user.name} Please Click on the link to activation your account: ${activationUrl}`,
      })
      res.status(201).json({
        success: true,
        message: `please check your mail :-${user.email} to activate your account`,
      })
    } catch (err) {
      return next(new ErrorHandler(err.message, 500))
    }
  } catch (err) {
    return next(new ErrorHandler(err.message, 400))
  }
})

//function to create Token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  })
}

module.exports = router
