const app = require('./app.js')

const connectDB = require("./data/database.js")

connectDB();



app.listen(process.env.PORT || 4000, () => {
   console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
 });
 