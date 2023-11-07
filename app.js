const express = require("express");
const userRouter = require('./routes/user.js');
const taskRouter = require('./routes/task.js');
const cors = require("cors")

const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const { errorMiddleware } = require("./middlewares/error.js");
dotenv.config({
  path: './data/config.env'
})


app= express();
module.exports = app 

//using middleware
app.use(express.json()) 
app.use(cookieParser())
    // setup for production
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))

//using routes
app.use('/api/v1/users',userRouter)
app.use('/api/v1/task',taskRouter)


app.get("/", (req, res) => {
  res.send("app.js is Working fine");
});


// using error middle ware 
app.use(errorMiddleware)