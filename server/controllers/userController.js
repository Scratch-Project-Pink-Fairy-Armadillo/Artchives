/**
 * READ: 
 * This file will contain all of the information regarding create, reading
 * updating, and delete users but will also include logic to authenicate the
 * user 
 */

//**TODO:acquire user model 
const User = require("../models/userModel")
//**TODO: create user object/document 

  //**TODO: create a method to get ALL users 
const userController = {};

userController.getUser = (req,rest,next) => {
    User.find({}, (err, users) => {
      // if a database error occurs, call next with the error message passed in
      // for the express global error handler to catch
      if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
      
      // store retrieved users into res.locals and move on to next middleware
      res.locals.users = users;
      return next();
    });
    //? using bcrypt
    //? implement hashing of passwords 
    //? Do token authentication? 
}

  //**TODO: Create a method of create a user 

  userController.createUser = (req, res, next) => {
    // const requiredProps = ['username', 'password']; //done for us in frontend
    // if (!requiredProps.every((prop) => prop in req.body)) return next({error: 'first error handler'});
    const {username, password} = req.body;
  //create a newUser using userModel mongos database
    User.create({username, password}, (err, newUser) => {
      if (err) return next('Error in userController.createUser'  + JSON.stringify(err));
      //redirect to secret
      res.locals.newUser = newUser;
      // console.log(newUser);
      return next();
    });
  }


    //**TODO: Create a method to verify user 
    userController.verifyUser = (req,rest,next) => {
      // login button should direct to here
      //check  if the user exists and the password is correct??
      //if username is not found, then redirect to /signup
  
      User.findOne({username: req.body.username , password: req.body.password}, (err, data) => {
        console.log(data)
        if (data === null) {
          res.locals.verified = false
          return next();
        }
        else {
          res.locals.verified = true
          return next();
        }
      })
    }
  
  //**TODO: export controller 
  module.exports = userController;