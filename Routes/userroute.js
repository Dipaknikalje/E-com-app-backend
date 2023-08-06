const { register, login } = require('../controller/user');

const userroute=require('express').Router();

userroute.post("/register",register)
userroute.post("/login",login)


module.exports =userroute