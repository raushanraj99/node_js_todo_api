
const {mongoose } = require("mongoose");


const mongoDB = ()=>{
   mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "backendapi",
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.error("Failed to connect database");
  });
}
module.exports=mongoDB;