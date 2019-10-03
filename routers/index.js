
const express = require("express");
const userRouter = require("./user-router");
const auth = require("../Auth");
const passport = require("../passport");

var router = express.Router()


router.use('/auth',auth);
router.use('/user',passport,userRouter);





module.exports =router;