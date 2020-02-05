const httpStatus = require('http-status');
const { omit } = require('lodash');
const User = require('../models/user.model');

exports.list = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(httpStatus.CREATED);
    res.json(savedUser.transform());
  } catch (error) {
  console.log(error)  }
};

