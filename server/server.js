const express = require('express'); 
const app = express();

//arquiring mongodb framework 
const mongodb = require('mongodb');
//URI? 

//this is where the backend server will run 
const PORT = 3000; 


app.use(express.json());
//do we have to use express static to link client folder? 

//CRUD methods 


app.get('/', (req, res) => {});



//this is where the backend server will run 
app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`)
});