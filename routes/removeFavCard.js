const express = require('express');
const router  = express.Router();
const deleteFav = require('../db/queries/favourites');



router.post('/:id', (req, res) => {
  const userID = req.session.user_id;
  const cardID = req.params.id
  deleteFav.removeFromFavourites(userID, cardID)
  .then(() => {
    res.redirect(`/herocard/${cardID}`)
  });
});



module.exports =  router;
