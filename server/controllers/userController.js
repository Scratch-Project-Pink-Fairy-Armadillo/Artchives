/**
 * READ: 
 * This file will contain all of the information regarding create, reading
 * updating, and delete users but will also include logic to authenicate the
 * user 
 */

//**TODO:acquire user model 
const usersModel = require("./usersModel")
//**TODO: create user object/document 
const userModel = { 
  
  //**TODO: create a method to get ALL users 
  createUser(req,rest,next) {
    
  },
  //**TODO: Create a method to verify user 
  verifyUser(req,rest,next) {

  },
  //**TODO: Create a method of create a user 
  getUser (req,rest,next) {
        //? using bcrypt
        //? implement hashing of passwords 
        //? Do token authentication? 
  }
}



  //**TODO: export controller 

