const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  year: Number,
  date: Date,
  details: String,
});

module.exports = mongoose.model("Products", productSchema);
