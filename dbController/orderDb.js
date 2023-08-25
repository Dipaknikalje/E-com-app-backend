const formatDateTime = require("../middleware/dateTime");
// const searchFeatures = require("../model/searchClass");
const Orders = require("../modelSchema/orderSchema");

const orderAdd = async (req, res) => {
  const data = req.body;
  const date = new Date();

  const { formattedDate, formattedTime } = formatDateTime(date);

  data.orderDate = formattedDate;
  data.orderTime = formattedTime;

  try {
    const result = await Orders.create(data);
    res.send(result);
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send({
      message: "Internal server error",
      statusCode: 500,
    });
  }
};

const fetchOrder = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const result = await Orders.find({ user_id });
    res.send(result);
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send({
      message: "Internal server error",
      statusCode: 500,
    });
  }
};

const fetchAllOrder = async (req, res) => {
  const { cartItems, cartTotalAmount, cartTotalQuantity, user_id } = req.body;
  try {
    const result = await Orders.find();
    res.send(result);
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send({
      message: "Internal server error",
      statusCode: 500,
    });
  }
};

const deleteUserOrder = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const result = await Orders.deleteOne({ user_id });
    res.send(result);
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send({
      message: "Internal server error",
      statusCode: 500,
    });
  }
};

const deleteAllOrder = async (req, res) => {
  const { user_id } = req.body;
  try {
    const result = await Orders.deleteMany();
    res.send("deleted");
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send({
      message: "Internal server error",
      statusCode: 500,
    });
  }
};

module.exports = {
  orderAdd,
  fetchOrder,
  deleteUserOrder,
  deleteAllOrder,
  fetchAllOrder,
};
