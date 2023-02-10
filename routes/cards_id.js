const express = require('express');
const router  = express.Router();
const checkFavourite = require('../db/queries/addNewFav');
const getSellerName = require('../db/queries/users');

router.get('/:id', (req, res) => {
  const cardID = req.params.id;
  const currentURL = `/herocard/${cardID}`
  const userID = req.session.user_id;
  let templateVars = { userID, currentURL };
  const queryArr = [checkFavourite.checkFavourite(userID, cardID),
    getSellerName.getCardInfo(cardID)]
  Promise.all(queryArr)
  .then((response) => {
    templateVars['cards'] = response[1];
    templateVars['favourites'] = response[0];
    res.render('ch_show_card', templateVars);
  })
})




module.exports = router;
