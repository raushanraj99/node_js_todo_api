const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./routes/user')

const app = express();

//using middleware
app.use(express.json()) 
app.use('/users',userRouter)


// database connected 
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.error("Failed to connect database");
  });



app.get("/", (req, res) => {
  res.send("app.js is Working fine");
});


app.listen(4000, () => {
  console.log("Server is working fine ");
});
