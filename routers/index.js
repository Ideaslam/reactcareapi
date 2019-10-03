
const express = require("express");
const userRouter = require("./user-router");
const auth = require("../Auth");
const passport = require("../passport");

var router = express.Router()


router.get('/',(req,res)=>res.send('Hello World!'));
router.use('/auth',auth);
router.use('/user',userRouter);





module.exports =router;