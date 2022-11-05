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
const PORT = 3000; 
const app = express();


//URI? 
// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/scratchproject' : 'mongodb://localhost/scratchproject';
// mongoose.connect(mongoURI);

//Set up for routing pages 
const archiveRouter = express.Router();  
app.use('/archive', archiveRouter); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//do we have to use express static to link client folder? 
app.use('/client', express.static(path.resolve(__dirname, '../client')));


//route CRUD methods 


//**TODO: GET -Reponse at root 
app.get('/', (req, res) => {

  return res.sendStatus(200).json('This is from the GET response for the root path')
});

//**TODO: GET -users 
  //! Frontend must implement a GET request to the backend 

//**TODO: GET -individual users? 
  //! Frontend must implement a GET request to the backend 

//**TODO: POST -user signs up, store info into DB 
  //! Frontend must implement a POST request to the backend

  
  //**TODO: PUT -user can update favorites 
  //! Frontend must implement a POST request to the backend

  //**TODO: DELETE -user can delete favorites 
  //! Frontend must implement a POST request to the backend//! Frontend must 
  
  
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
  
  //http://localhost:3000/
  module.exports = app;
  /*
  ****** Stretch feature 
  **TODO: PUT -user can update info 
    ! Frontend must implement a POST request to the backend
  */