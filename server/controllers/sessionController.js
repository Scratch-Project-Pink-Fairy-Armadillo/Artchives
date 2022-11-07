// const Session = require('../models/sessionModel');
// const cookieController = require('../controllers/cookieController');
// const User = require('../models/userModel');

// const sessionController = {

// // * isLoggedIn - find the appropriate session for this request in the database, then
// // * verify whether or not the session is still valid.
// // */
// isLoggedIn (req, res, next) {
//   const [username, password] = req.body; 
//   User.findOne({username: username, password: password}, async () => {
//     try { 
//       if (username && password){
//         //set the session 

//       }
//     }
//     catch (error) {
//       next({
//         log: "Incorrect Session",
//         status: 400,
//       })
//     }
//   });


// // * startSession - create and save a new Session into the database.
// // */
// startSession (req, res, next) {

//   //write code here
//   //Session.create with the property of cookieId: ssid
//   // Session.create({cookieId: ssid})
//   return next();
//   };
//   }
// }
// module.exports = sessionController;
