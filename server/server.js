const express = require('express'); 
const path = require('path');
//arquiring mongodb framework 
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const cookieParser = require('cookie-parser');


//place controller requires here
const favoritesController = require('./controllers/favoritesController');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

//this is where the backend server will run 
const PORT = 3000; 
const app = express();
app.use(express.json());
// app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// cedar added this for static assets 
app.use(express.static(path.join(__dirname, '../client')))

//URI? 
const URI = 'mongodb+srv://PFA:pfa@cluster0.eptbr6d.mongodb.net/?retryWrites=true&w=majority';
// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/scratchproject' : 'mongodb://localhost/scratchproject';
// mongoose.connect(mongoURI);

// // cedar added the below
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

//Set up for routing pages 
// const archiveRouter = express.Router();  
// app.use('/archive', archiveRouter); 


//do we have to use express static to link client folder? 
//app.use('/client', express.static(path.resolve(__dirname, '../client')));


//route CRUD methods 


//**TODO: GET -Response at root 
app.get('/', (req, res) => {
  console.log('hello world')
  res.send("hello World!!")
  // return res.sendStatus(200).json('This is from the GET response for the root path')
});

// app.get('/favorites', (req,res) => {
//   return res.sendStatus(200).json(res.locals.artId);
// });
app.get('/favorites', favoritesController.getFavorites, (req,res) => {
  return res.sendStatus(200).json('fav view');
});

app.post('/favorites', favoritesController.createFavorite, (req,res) => {
  return res.sendStatus(200).json('fav created');
});


// app.get('/favorites', favoritesController.getFavorites, (req,res) => {
//   return console.log('this is the favorites');
// });
app.get('/login', (req,res) => {
  return res.json('this is login page')
});

app.get('/signup', userController.createUser, (req,res) => {
  return res.json(res.locals.newUser)
});


app.post('/login',  userController.getUser, (req,res) => {
  res.send('this is the logged in user:', res.locals.user);
  res.json(res.locals.verified);
});


app.post('/signup', userController.createUser, (req, res) => {
  console.log('user GET is working');
 return res.json(res.locals.verified);
});




//**TODO: GET -users 
  //! Frontend must implement a GET request to the backend 
app.get('/users', userController.getAllUsers, (req,res) => {
    return res.sendStatus(200).json(res.locals.users);
  
  });
  
  
  //**TODO: GET -individual users? 
    //! Frontend must implement a GET request to the backend 
  app.get('/user', userController.getUser, (req,res) => {
  console.log('line93');
  return res.sendStatus(200).json(res.locals.user);
});


  //! Frontend must implement a POST request to the backend
  
  //**TODO: POST -user signs up, store info into DB 
  app.post('/signup', (req,res) => {
    return res.status(200).json(res.locals.newUserData);
  })
  
  
  //**TODO: PUT -user can update favorites 
  //! Frontend must implement a POST request to the backend

  // app.post ('/favorites', favoritesController.getFavorites, (req, res) =>{
  //   return res.sendStatus(200).json("favorite this and sent props!");
  // });


  //**TODO: DELETE -user can delete favorites 
  //! Frontend must implement a POST request to the backend//! Frontend must 
  // app.delete ('/favorites/:id', favoritesController.deleteArt, (req, res) =>{
  //   return res.json("Artwork deleted successfully!");
  // });
  
  //if routing to unknown page, 404 message
  app.use('*', (req, res) => res.status(404).send('This is not the page you\'re looking for...'));
  
/**
 * Global error handler
 */
//  app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).send({ error: err });
// });


  //this is where the backend server will run 
  app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
  });
  
  module.exports = app;
  /*
  ****** Stretch feature 
  **TODO: PUT -user can update info 
    ! Frontend must implement a POST request to the backend
  */