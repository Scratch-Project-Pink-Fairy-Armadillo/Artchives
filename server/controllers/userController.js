/**
 * READ:
 * This file will contain all of the information regarding create, reading
 * updating, and delete users but will also include logic to authenticate the
 * user
 */

//**TODO:acquire user model
const User = require('../models/userModel');
//**TODO: create user object/document

//**TODO: create a method to get ALL users
const userController = {};

userController.getUser = (req, res, next) => {
	const { username, password } = req.body;
	User.findOne({ username, password }, (err, user) => {
		// if a database error occurs, call next with the error message passed in
		// for the express global error handler to catch
		if (err)
			return next(
				'Error in userController.getAllUsers: ' + JSON.stringify(err)
			);
		if (!username || !password) {
			res.send(400);
		}
		// store retrieved users into res.locals and move on to next middleware
		res.locals.user = User;
		console.log(user);
		return next();
	});
	//? using bcrypt
	//? implement hashing of passwords
	//? Do token authentication?
};

//**TODO: Create a method to get ALL users
userController.getAllUsers = (req, res, next) => {
	const { username, password } = req.body;

	User.find({ username: username, password: password }, (err, users) => {
		if (err) {
			return next('Error in userController.getAllUsers' + JSON.stringify(err));
		}
		console.log('User in database: ' + JSON.stringify(users));
		// console.log(res.locals.users);
		res.locals.users = users;
		return next();
	});
};

//**TODO: Create a method of create a user
userController.createUser = (req, res, next) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return 'Username or password do not exist in userController.createUser';
	}
	//Hashing password with a salt factor of 10
	// const hashedPassword = bcrypt.hash(password, 10);

	//create a newUser using userModel mongos database
	User.create({ username, password }, (err, newUserData) => {
		if (err) return next('Error in userController.createUser' + JSON.stringify(err));

		//Store this user as a verified user
		res.locals.verified = User;
		res.locals.newUserData = newUserData;

		// console.log(newUser);
		return next();
	});
};

//**TODO: Create a method to verify user
userController.verifyUser = (req, res, next) => {
	// login button should direct to here
	//check  if the user exists and the password is correct??
	//if username is not found, then redirect to /signup
	User.findOne({username: req.body.username , password: req.body.password}, (err, data) => {
	  console.log(data)
	if (data === null) {
	  res.locals.verified = false;
	  return next();
	}
	else {
	  res.locals.verified = true;
	  return next();
	}
	})
};
// not in server, just created
userController.signUp = (req, res, next) => {
	// login button should direct to here
	const { username } = req.body;
	//check  if the user exists and the password is correct??
	//if username is not found, then redirect to /signup
	const findUser = User.exists({ username });
	console.log(findUser);
	if (findUser) {
		res.locals.signedUp = true;
		return next();
	} else {
  res.locals.signedUp = false;
  return next();
  }
	
};

//**TODO: export controller
module.exports = userController;
