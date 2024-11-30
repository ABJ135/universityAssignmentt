const mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/library";

mongoose.connect(mongoUrl);

const db = mongoose.connection; //builten function to stable connection
db.on("connected", () => {
  console.log("MongoDB is connected");
});
db.on("error", () => {
  console.log("MongoDB connection errOR");
});
db.on("disconnected", () => {
  console.log("MongoDB is didconnected");
});
module.exports = db;
