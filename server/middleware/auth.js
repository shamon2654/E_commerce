const ErrorHandler = require("../utils/errorHandler")


const catchAsyncErrors = require("./catchAsyncErrors")

const jwt = require("jsonwebtoken")

const User = require("../Models/User");



exports.isAuthenticated = catchAsyncErrors (async(req, res, next) => {
    const { token } = req.cookies;
console.log(token)

    if(!token) {
        return next(new ErrorHandler("Please Login to Continue",401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    next();
});