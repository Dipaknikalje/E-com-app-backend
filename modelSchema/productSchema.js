const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ids: {
    type: Number,
  },
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  ratting: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  oPrice: {
    type: String,
  },
  subcat: {
    type: String,
  },
  quantity: {
    type: String,
  },
});
const product = mongoose.model("product", productSchema);

module.exports = product;
