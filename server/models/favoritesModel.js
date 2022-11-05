/**
 * READ: 
 * This file will contain all of the information regarding the schema of the
 * favorites depending on the user
 */

const mongoose = require('mfavoritedbse');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//favorites schema for each favorite FIGURE OUT WHAT WE NEED TO SAVE FROM THESE OBJECTS FETCHED FROM API
const favoritesSchema = new Schema({
    datatype1: {type: String, required: true},
    datatype2: {type: String, required: true}
  });


//export schema 
const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites; 
