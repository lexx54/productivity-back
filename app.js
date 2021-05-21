const express = require("express");
const app = express();
const cors=require("cors");
const userRoute = require("./routes/user.route");
const mongoose = require("mongoose");
const config = require("./utils/config");
const logger = require("./utils/logger");

//start MongoDb connection
mongoose.connect(config.URL,
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  })
  .then(()=>{
    logger.info('connected to MongoDB')
  })
  .catch(err => {
    logger.error(err.message)
  })

//middlewares
app.use(cors());
app.use(express.json())

//routes
app.use("/api/users",userRoute);

module.exports = app;