const express = require('express');
const router  = express.Router();
const getCardById = require('../db/queries/getCardByID');
const checkFavourite = require('../db/queries/addNewFav');



router.get('/:id', (req, res) => {
  const cardID = req.params.id;
  const userID = req.session.user_id;
  let templateVars = { userID };
  const queryArr = [getCardById.getCardById(cardID), checkFavourite.checkFavourite(userID, cardID)];
  Promise.all(queryArr)
  .then((response) => {
    console.log(queryArr)
    templateVars['cards'] = response[0];
    templateVars['favourites'] = response[1];
    res.render('ch_show_card', templateVars);
  })
})




module.exports = router;
