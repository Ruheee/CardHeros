const express = require('express');
const router  = express.Router();
const favouriteQueries = require('../db/queries/checkFavourite');
const cardQueries = require('../db/queries/getCard');

router.get('/:id', (req, res) => {
  const cardID = req.params.id;
  const currentURL = `/herocard/${cardID}`
  const userID = req.session.user_id;
  let templateVars = { userID, currentURL };

  const queryArr = [ favouriteQueries.checkFavourite(userID, cardID), cardQueries.getCard(cardID) ]

  Promise.all(queryArr)
  .then((response) => {
    for (result of response){
      'user_id' in result[0] ? templateVars.card = result[0] : templateVars.favourites = result[0];
    }

    res.render('ch_show_card', templateVars);
  })
})




module.exports = router;
