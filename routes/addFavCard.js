const express = require('express');
const router  = express.Router();
const addNewFav = require('../db/queries/addNewFav');

router.post('/:id', (req, res) => {
  const userID = req.session.user_id;
  const cardID = req.params.id

  addNewFav.addCardToFav(userID, cardID)
  .then((response) => {
    res.redirect(`${cardID}`)
  })
})

module.exports =  router;
