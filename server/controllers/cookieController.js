const User = require("../models/userModel");
const { response } = require("../server");

const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  // write code here
  res.cookie('testing', 'test');
  //create cookie named secret with random number from 0 - 99
  const random = Math.floor(Math.random() * 100);
  // res.body.random = random
  res.cookie('secret', random);
  return next();
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  // find id of user from mongoose 
  //create cookie named ssid with value equal to id of user

  //everytime they sign up or login, there will be a request body with username, password, _id, and _v
  User.findOne({username: req.body.username}, (err, data) => {
    //if id is not found
    if (data === null) {
      return next();
    }
    // data._id
    res.cookie('ssid', data._id, { httpOnly: true });
    // console.log(ssid)
    return next();
  })

  // res.cookie('ssid', *id property from req.body??* , { httpOnly: true });
}

module.exports = cookieController;
