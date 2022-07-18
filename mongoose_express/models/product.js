//require mongoose since we are making a mongoose model
const mongoose = require("mongoose");

//make schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["fruit", "vegetable", "dairy"],
  },
});

//product compilation
const Product = mongoose.model("Product", productSchema);

//exports product module
module.exports = Product;
