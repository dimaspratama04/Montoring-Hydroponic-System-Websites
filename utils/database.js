const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/db_AMHBM";

const db = mongoose.connect(`${uri}`, (err) => {
  if (err) throw err;
  console.log("Connected to Database");
});

module.exports = db;
