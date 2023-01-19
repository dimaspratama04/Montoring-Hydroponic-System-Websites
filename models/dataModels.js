const mongoose = require("mongoose");
const Data = mongoose.model("Data", {
  suhuAir: String,
  suhuLingkungan: String,
  TDS: String,
});

module.exports = Data;
