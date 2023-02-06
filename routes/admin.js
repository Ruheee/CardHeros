const { query } = require('express');
const express = require('express');
const router  = express.Router();
const favouritesQueries = require('../db/queries/favourites');
const myCardsQueries = require('../db/queries/my-cards');

router.get('/', (req, res) => {
  //req.session.user_id will get the id of the currrent session
  const userID = 5;
  const templateVars = { userID: userID };

  const queryArr = [ favouritesQueries.getFavourites(userID), myCardsQueries.getMyCards(userID) ];

  Promise.all(queryArr).then((values) => {
    const isUserCard = card => card.user_id === userID;
    const isUserCards = cardsArray => cardsArray.every(isUserCard);

    templateVars.myCards = isUserCards(values[0]) ? values[0] : values[1];
    templateVars.favourites = isUserCards(values[0]) ? values[1] : values[0];

    res.render('ch_admin', templateVars);
  });
});

module.exports = router;
