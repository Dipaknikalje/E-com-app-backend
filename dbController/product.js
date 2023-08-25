const product = require("../modelSchema/productSchema");
const data = require("./data");
const searchbar = require("./searchbar");
const addProducts = async (req, res) => {
  const result = await product.insertMany(data);
  return res.send({ msg: "user data has been stored", result: result });
};
const addProductTodb = async (req, res) => {
  const data = req.body;
  const {
    ids,
    name,
    category,
    ratting,
    image,
    price,
    oPrice,
    subcat,
    quantity,
  } = data;

  const result = await product.insertMany({
    ids,
    name,
    category,
    ratting,
    image,
    price,
    oPrice,
    subcat,
    quantity,
  });
  return res.send({ msg: "user data has been stored", result: result });
};

const fetchData = async (req, res) => {
  const data = req.body;
  const result = await product.find();
  return res.send({ result });
};
const fetchParticularbyCat = async (req, res) => {
  const data = req.body;
  const { category } = req.params;
  const result = await product.find({ category: category });
  return res.send({ result: result });
};
const fetchParticularbySubCat = async (req, res) => {
  const data = req.body;
  const { subcat } = req.params;
  const result = await product.find({ subcat: subcat });
  return res.send({ result: result });
};

const deleteProduct = async (req, res) => {
  const data = req.body;
  const result = await product.deleteMany();
  return res.send({ msg: "data has been deleted", result: result });
};
const searchproduct = async (req, res) => {
  const data = req.query;
  const result = new searchbar(product.find(), data).search();
  const products = await result.query;
  return res.send(products);
};

module.exports = {
  addProducts,
  addProductTodb,
  fetchData,
  fetchParticularbyCat,
  deleteProduct,
  fetchParticularbySubCat,
  searchproduct,
};
