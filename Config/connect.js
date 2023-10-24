const mongoose = require("mongoose");
const dotenv = require('dotenv').config()
const MONGO = process.env.MONGO_URL
mongoose.set('strictQuery', true)
const connection = mongoose.connect(`${MONGO}`,{
  dbName:"dashboard",
})

module.exports = {
  connection
};