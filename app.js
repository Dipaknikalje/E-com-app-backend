const express = require("express");
const apiroute = require("./Routes/apiroute");
// const userroute=require('./Routes/userroute')
const userroute = require("./Routes/userroute");
const dotenv = require("dotenv");
const cors = require("cors");
const connect=require('./db/mongooseDb');
const productRoute = require("./Routes/productRoute");
const userdbroute = require("./Routes/userdbroute");
const cartRoute = require("./Routes/cartRoute");
const orderRoute = require("./Routes/orderRoute");
dotenv.config();
const app = express();
app.use(express.json());
// app.use('/user',userroute)
const corsOption = {
  origin: "*",
};
app.use(cors(corsOption));
app.use("/user", userroute);
app.use("/api", apiroute);

app.use('/products',productRoute)
app.use('/userdata',userdbroute)
app.use('/cart',cartRoute)
app.use('/order',orderRoute)

app.get("/", (req, res) => {
  res.send("home page is rendered");
});

port = process.env.PORT;
app.listen(port, async () => {
  try {
    console.log(`server running on port ${port}`);
     await connect();
  } catch (error) {
    console.log("something went wrong",error.message)
  }
});
