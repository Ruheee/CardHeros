const express = require('express');
const router  = express.Router();
const getCardById = require('../db/queries/getCardByID');
const checkFavourite = require('../db/queries/addNewFav');
const getUserName = require('../db/queries/users')



router.get('/:id', (req, res) => {
  const cardID = req.params.id;
  const userID = req.session.user_id;
  let templateVars = { userID };
  const queryArr = [getCardById.getCardById(cardID), checkFavourite.checkFavourite(userID, cardID), getUserName.getUsersName(userID)];
  Promise.all(queryArr)
  .then((response) => {

    templateVars['cards'] = response[0];
    templateVars['favourites'] = response[1];
    templateVars['user'] = response[2][0]
    res.render('ch_show_card', templateVars);
  })
})




module.exports = router;
