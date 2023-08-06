const express = require("express");
const apiroute = require("./Routes/apiroute");
// const userroute=require('./Routes/userroute')
const userroute = require("./Routes/userroute");
const dotenv = require("dotenv");
const cors = require("cors");
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
app.get("/", (req, res) => {
  res.send("home page is rendered");
});

port = process.env.PORT;
app.listen(port, () => {
  try {
    console.log(`server running on port ${port}`);
  } catch (error) {}
});
