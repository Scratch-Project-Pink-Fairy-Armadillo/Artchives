/**
 * READ: 
 * This file will contain all of the information regarding create, reading
 * updating, and delete favorites 
 */
const Favorites = require('../models/favoritesModel');


//**TODO: create favorites object 
const favoritesController = {}

  //**TODO: Create a method to get all the favorites data when the user goes to
  //route /favorites */
  favoritesController.getFavorites = (res, req, next) => {
    // const response = req.body;
    // res.locals.artId = req.body;
    // const artId = req.body.artId;
    // res.locals.artId = req.body.artId;
    // const {artId, title, imgUrl} = req.params;
    // Favorites.findOne ({}, (err, favoriteArt) => {

    // });
    // const {artId, title, image_id, artist_display, artwork_type_title, date_display, department_title, department_id} = req.body; 
    // const image_id = req.body;
    console.log("this is the request body", req.body);

    Favorites.findOne ({
      // artId: artId, 
      // title:title, 
      image_id:image_id,
      // artist_display:artist_display, 
      // artwork_type_title:artwork_type_title, 
      // date_display:date_display, 
      // department_title:department_title, 
      // department_id:department_id
    
    }, async (err, artResult) => {
      if (!artId) {

        res.send(` ${err} This artwork cannot be found. Please call the Chicago Art\'s for more information on this piece.`);
      }
      console.log('this is the artwork that has been saved',artResult);
      return next();
    });

  }



   //**TODO: Create a method to store the data when the user favorite something 
   favoritesController.createFavorite =(res, req, next) => {
    console.log(req.body);
      // const {artId, title, image_id, artist_display, artwork_type_title, date_display, department_title, department_id} = req.body;
      const {image_id} = req.body;
    // const artId = req.body.artId; 
    // const title = req.body.title; 
    // const imgUrl = req.body.imgUrl;

    // if (!artId && !title && !imgUrl)  {
    //   return ('This artwork does not exist!');
    // }
      Favorites.create({
        // artId: artId, 
        // title:title, 
        image_id:req.body, 
        // artist_display:artist_display, 
        // artwork_type_title:artwork_type_title, 
        // date_display:date_display, 
        // department_title:department_title, 
        // department_id:department_id
      }, 
      (err, artFav) => {
        if (err) return next('error in createFavs' + JSON.stringify(err))
          res.locals.fav = artFav; 
          // console.log(artFav);
          return next();
        // console.log(err);
        // console.log("this is favorited art", artFav);
      });
      // return next();
      // console.log(req.body);
  }

  //**TODO: Create a method when the user updates the favorite? 
  //? Frontend may need to implement an event handler to handle this event
  // updateFavorites(res, req, next){ 
  //   favorites.findOneAndUpdate()

  // },
  //**TODO: Create a method when the user wants the find a certain favorite
  // favoritesController.findFavorites = (res, req, next) => {
  //   const [id, image_id] = res.params;
  //   Favorites.findOneAndDelete({id: id, image_id: image_id}, (err, deleteArt) => {
  //     if (err) {
  //       res.send('This painting is not in your favorites')
  //     }
  //     console.log('This painting was deleted successfully: ', deleteArt);
  //     return next();
  //   });

  // },
  // //**TODO: Create a method when the user wants to delete the favorite 
  // favoritesController.deleteFavorite = (res, req, next) => {

  // }
  
  //**TODO: export controller 
  module.exports = favoritesController; 