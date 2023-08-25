const { addToCart, fetchCartData, removeProduct } = require("../dbController/cart");

const cartRoute = require("express").Router();

cartRoute.post("/addtocart/:product_id", addToCart);
cartRoute.get("/fetchcartdata/:user_id", fetchCartData);
cartRoute.delete('/delete/:product_id',removeProduct)
module.exports = cartRoute;
