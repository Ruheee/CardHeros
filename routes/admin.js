const { query } = require('express');
const express = require('express');
const router  = express.Router();
const favouritesQueries = require('../db/queries/favourites');
const myCardsQueries = require('../db/queries/my-cards');

router.get('/', (req, res) => {
  const userID = 5;
  const templateVars = { userID: userID };

  const queryArr = [ favouritesQueries.getFavourites(userID), myCardsQueries.getMyCards(userID) ];

  Promise.all(queryArr).then((values) => {
    for (let card of values[0]) {
      if (card.user_id != userID) {
        templateVars['myCards'] = values[1];
        templateVars['favourites'] = values[0];
      }
    }

    if (!templateVars['myCards']) {
      templateVars['myCards'] = values[0];
      templateVars['favourites'] = values[1];
    }

    res.render('ch_admin', templateVars);
  });
});

module.exports = router;
