const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRound = process.env.saltRound;
// console.log(typeof (saltRound));
const SALTROUND_NEW = parseFloat(saltRound);
let storeData = [];
const register = async (req, res) => {
  //   console.log(req.body);
  const data = req.body;
  const { name, number, email, password } = req.body;
  //check the mail-id before storing data
  const user = storeData.find((items) => {
    if (items.email === data.email) {
      return items;
    }
  });
  if (user) {
    res.send({
      status: "failed",
      msg: "user already exist",
    });
  } else {
    const salt = bcrypt.genSaltSync(SALTROUND_NEW);
    console.log(salt);
    const hashpassword = bcrypt.hashSync(data.password, salt);
    // console.log(hashpassword);

    const token = await jwt.sign(
      { email: data.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    data.token = token;
    console.log(token);
    const tempobj = {
      name: data.name,
      number: data.number,
      email: data.email,
      password: hashpassword,
      token: token,
      status: "success",
    };
    storeData.push(tempobj);
    console.log(storeData);
    res.send(tempobj);
  }
};
const login = (req, res) => {
  const data = req.body;
  const { email, password } = data;
  const user = storeData.find((items) => {
    if (items.email === data.email) {
      const salt = bcrypt.genSaltSync(10);
      const validate = bcrypt.compareSync(data.password, items.password);
      const token = jwt.sign(
        { email: data.email },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "7d",
        }
      );

      // console.log(validate);
      if (validate) {
        // console.log(token);
        return res.send({
          status: "success",
          msg: "user login sucessfully!!!!",
          token: token,
          name: data.name,
        });
      } else {
        res.send({
          status: "failed",
          msg: "incorrect password or emailid",
        });
      }
    }
  });
  if (!user) {
    res.send({
      status: "failure",
      msg: "user not registered, please registered before login or invalid mail id or password",
    });
  }
};


module.exports = { login, register };
