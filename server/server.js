const express = require('express'); 
const path = require('path');
//arquiring mongodb framework 
const mongodb = require('mongodb');
const mongoose = require('mongoose');

//place controller requires here


//this is where the backend server will run 
const PORT = 3000; 
const app = express();


//URI? 
const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/scratchproject' : 'mongodb://localhost/scratchproject';
mongoose.connect(mongoURI);


app.use(express.json());
//do we have to use express static to link client folder? 

//CRUD methods 

//**TODO: GET -Reponse at root 
app.get('/', (req, res) => {});

//**TODO: GET -users 
  //! Frontend must impelment a GET request to the backend 

//**TODO: GET -individual users? 
  //! Frontend must impelment a GET request to the backend 

//**TODO: POST -user signs up, store info into DB 
  //? using bcrypt
  //? impelment hashing of passwords 
  //? Do token authentication? 

//**TODO: PUT -user can update info 

//**TODO: PUT -user can update favorites 

//**TODO: DELETE -user can delete favorites 




//this is where the backend server will run 
app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`)
});