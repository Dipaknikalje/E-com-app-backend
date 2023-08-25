const cart = require("../modelSchema/cartSchema");
const product = require("../modelSchema/productSchema");

const addToCart = async (req, res) => {
  const { user_id } = req.body;
  const _id = req.params.product_id;
  const data = await product.findOne({ _id: _id });
  console.log(data);
  const result = await cart.create({
    user_id,
    data,
  });
  return res.send({
    msg: "product added to cart",
    result: result,
  });
};

const fetchCartData = async (req, res) => {
  const user_id = req.params.user_id;

  const user = await cart.find({ user_id: user_id });
  return res.send(user);
};

const removeProduct=async(req,res)=>{
    const { user_id } = req.body;
  const _id = req.params.product_id;
  const data = await product.findOne({ _id: _id });
  console.log(data);
  const result = await cart.deleteOne({_id:_id});
  return res.send({
    msg: "product removed from cart",
    result: result,
  });
};

module.exports = { addToCart, fetchCartData,removeProduct };
