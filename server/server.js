const express = require('express'); 
const path = require('path');
//arquiring mongodb framework 
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

//place controller requires here
const favoritesController = require('./controllers/favoritesController');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

//this is where the backend server will run 
const app = express();
const PORT = 3000; 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// cedar added this for static assets 
app.use(express.static(path.join(__dirname, '../client')))

//URI? 
// const URI = 'mongodb+srv://PFA:pfa@cluster0.eptbr6d.mongodb.net/?retryWrites=true&w=majority';
// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/scratchproject' : 'mongodb://localhost/scratchproject';
// mongoose.connect(mongoURI);

// // cedar added the below
// mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });

// cedar added the below
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
  res.send("hello World!!")
  // return res.sendStatus(200).json('This is from the GET response for the root path')
});

// app.get('/favorites', (req,res) => {
//   return res.sendStatus(200).json(res.locals.artId);
// });

app.post('/favorites', favoritesController.getFavorites, (req,res) => {
  return res.sendStatus(200).send('this is the favorites');
});

app.get('/favorites', favoritesController.getFavorites, (req,res) => {
  return console.log('this is the favorites');
});

app.get('/signup', (req,res) => {
  return res.json('This is the sign up page')
});

app.post('/signup', (req,res) => {
  console.log('user GET is working');
  res.json('sign up POST route')
});
//**TODO: GET -users 
  //! Frontend must implement a GET request to the backend 

app.get('/user', (req,res) => {
  return res.sendStatus(200).json('users should be here');

app.get('/users', userController.getAllUsers, (req,res) => {
  return res.sendStatus(200).json(res.locals.user);

});
//**TODO: GET -individual users? 
  //! Frontend must implement a GET request to the backend 
 
  //! Frontend must implement a POST request to the backend
  
  //**TODO: POST -user signs up, store info into DB 
  app.post('/signup', (req,res) => {
    return res.sendStatus(200).json('were going somewhere');
  })
  
  
  //**TODO: PUT -user can update favorites 
  //! Frontend must implement a POST request to the backend
  app.get ('/favorites/:id', favoritesController.getFavorites, (req, res) =>{
    return res.sendStatus(200).json("favorite this and sent props!");
  });



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
 app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});


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