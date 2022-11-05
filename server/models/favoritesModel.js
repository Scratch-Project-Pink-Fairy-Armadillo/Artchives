/**
 * READ: 
 * This file will contain all of the information regarding the schema of the
 * favorites depending on the user
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//favorites schema for each favorite FIGURE OUT WHAT WE NEED TO SAVE FROM THESE OBJECTS FETCHED FROM API
const favoritesSchema = new Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    date_display: {type: String, required: true},
    artwork_type_title: { type: String, required: true},
    department_title: {type: String, required: true},
    department_id: {type: String, required: true},
    image_id: {type: String, required: true}
  });


//export schema 
const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites; 
