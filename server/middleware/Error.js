const ErrorHandler = require("../utils/errorHandler")

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.message = err.message || "internal server Error"

  //wrong mongoDb id error
  if (err.name === "CastError") {
    const message = `Resource not found with this id... invalid${err.path}`
    err = new ErrorHandler(message, 400)
  }
  //duplicate key error
  if (err.code === 11000) {
    const message = `duplicate Key ${Object.keys(err.keyValue)} Entered`
    err = new ErrorHandler(message, 400)
  }

  // wrong jwt  error
  if (err.name === "JsonWebTokenError") {
    const message = `your Url is Expired please try again later`
    err = new ErrorHandler(message, 400)
  }

  //jwt expired
  if (err.name === "TokenExpiredError") {
    const message = `your Url is Expired please try again`
    err = new ErrorHandler(message, 400)
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  })
}
