/**
 * READ: 
 * This file will contain all of the information regarding create, reading
 * updating, and delete favorites 
 */

const favoritesController = {
//**TODO: create favorites object 

  //**TODO: Create a method to get all the favorites data when the user goes to
  //route /favorites */
  getFavorites(res, req, next) {
    const response = req.body;
    res.locals.artId = req.body.artId;
    // const [artId] = req.body;
    // res.locals.artId = req.body.artId;

    return next();
  },



   //**TODO: Create a method to store the data when the user favorite something 
   createFavorite(res, req, next){

    const [id, title, data_display, artwork_type_title,image_id ] = req.body;

    favorites.create({
      id: id, 
      title: title, 
      data_display: data_display,  
      image_id: image_id, 
      artwork_type_title: artwork_type_title,      
    });

  },
  //**TODO: Create a method when the user updates the favorite? 
  //? Frontend may need to implement an event handler to handle this event
  // updateFavorites(res, req, next){ 
  //   favorites.findOneAndUpdate()

  // },
  //**TODO: Create a method when the user wants the find a certain favorite
  findFavorites(res, req, next){
    const [id, image_id] = res.params;
    favorites.findOneAndDelete({id: id, image_id: image_id}, (err, deleteArt) => {
      if (err) {
        res.send('This painting is not in your favorites')
      }
      console.log('This painting was deleted successfully: ', deleteArt);
    });

  },
  //**TODO: Create a method when the user wants to delete the favorite 
  deleteFavorite(res, req, next){

  }
  
};
  //**TODO: export controller 
  module.exports = favoritesController; 