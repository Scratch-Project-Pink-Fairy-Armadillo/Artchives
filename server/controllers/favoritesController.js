/**
 * READ: 
 * This file will contain all of the information regarding create, reading
 * updating, and delete favorites 
 */
//**TODO: aquire favorites model 
const favoritesModel = require('../models/favoritesModel');
//**TODO: create favorites object 
const favoritesController = {
  //**TODO: Create a method to get all the favorites data when the user goes to
  //route /favorites */
  getFavorites(res, req, next) {
    // cont [id, title, data_display, artwork_type_title, department_title, department_id,image_id ] = req.body;
    const response = req.body;
    res.locals.artId = req.body.artId;
    return next();
  },



   //**TODO: Create a method to store the data when the user favorite something 
   createFavorite(res, req, next){

    const [id, title, data_display, artwork_type_title, department_title, department_id,image_id ] = req.body;

    favoritesModel.create({
      id: id, 
      title: title, 
      data_display: data_display,  
      image_id: image_id, 
      artwork_type_title: artwork_type_title,
      department_id: department_id,
      
    })

  },
  //**TODO: Create a method when the user updates the favorite? 
  //? Frontend may need to implement an event handler to handle this event
  updateFavorites(res, req, next){ 
    favoritesModels.findOneAndUpdate()

  },
  //**TODO: Create a method when the user wants the find a certain favorite
  findFavorites(res, req, next){

  },
  //**TODO: Create a method when the user wants to delete the favorite 
  deleteFavorite(res, req, next){

  }, 
  
};
 
  //**TODO: export controller 
  module.exports = favoritesController; 