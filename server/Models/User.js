const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email"],
  },
  Password: {
    type: String,
    required: [true, "Please Enter your Password"],
  },
  phoneNumber: {
    type: Number,
  },
  address: [
    {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      address1: {
        type: String,
      },
      address2: {
        type: String,
      },
      zipCode: {
        type: Number,
      },
      addressType: {
        type: String,
      },
    },
  ],
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    public_id: {
      type: String,
      required: false,
      },
      url: {
          type: String,
          required:false,
      }
    },
    createdAt: {
        type: Date,
        default:Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordTime:String
})

//Hash Password
userSchema.pre("save", async function (next) {
    if (!this.isModified("Password")) {
        next();
    }
    this.Password=await bcrypt.hash(this.Password,10)
})//pre is use to work as before  storing data in mongoose