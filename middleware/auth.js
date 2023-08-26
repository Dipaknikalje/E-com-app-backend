// const jwt = require("jsonwebtoken");
// const auth = (req, res, next) => {
//   const data = req.headers["authorization"];
//   const token = data.split(" ")[1];
//     //  const token=data;

//   const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
//   if (verify) {
//     console.log("verified");
//     return next();
//   }
//   return res.send({ msg: "user not authorized" });
// };

// module.exports = auth;
