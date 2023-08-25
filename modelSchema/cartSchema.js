const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  data: {
    type: Object,
    required:true,
  },
  
});

const cart = mongoose.model("carts", cartSchema);

module.exports = cart;
