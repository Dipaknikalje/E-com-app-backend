const mongoose = require("mongoose");

const url =
  "mongodb+srv://techdips:rushikesh@cluster0.npv63ry.mongodb.net/?retryWrites=true&w=majority";
// const url="mongodb://127.0.0.1:27017/ecomapp"

const connect = async () => {
  try {
    console.log("trying to conect");
    await mongoose.connect(url);
    console.log("db is connected");
  } catch (error) {
    console.log(error.message, "due to this occured");
  }
};

module.exports = connect;
