
const {mongoose } = require("mongoose");


const mongoDB = ()=>{
   mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "backendapi",
  })
  .then((c) => {
    console.log(`Database connected with ${c.connection.host}`);
  })
  .catch(() => {
    console.error("Failed to connect database");
  });
}
module.exports=mongoDB;