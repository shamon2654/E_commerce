const connectDb = require("./DB/connectDb.js")
const app = require("./app.js")

//handling uncaught error
process.on("uncaughtExxeption", (err) => {
  console.log(`Error:${err.message}`)
  console.log("Shutting down server for handling uncaught exception")
}) //it is using to catch custmise error,

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  })
}


//connectDb
connectDb();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`)
})

//unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`)
  console.log("Shutting down the server for unhandles promise rejection")
  server.close(() => {
    process.exit(1)
  })
})
