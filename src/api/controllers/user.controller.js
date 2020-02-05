const httpStatus = require('http-status');
const User = require('../models/user.model');

exports.list = async (req, res, next) => {
  try {
    console.log(">>>> req.body  <<<<<<")
    console.log(req.body)
    res.json({ok:"ok"})
  } catch (error) {
    console.log(">>>> req.body  <<<<<<")
  console.log(error)  
  res.json({ok:"false"})}
};

