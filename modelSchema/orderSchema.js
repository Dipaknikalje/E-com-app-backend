const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    cartItems: Object,
    cartTotalAmount: Number,
    cartTotalQuantity:Number,
    user_id: String ,
    orderDate: String, 
    orderTime: String,
})

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders