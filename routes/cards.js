const express = require('express');
const router  = express.Router();
const cardsQueries = require('../db/queries/cards');
const userFavouritesQueries = require('../db/queries/userFavourites');

router.get('/', (req, res) => {
  const currentURL = '/cards'
  const userID = req.session.user_id;
  const templateVars = { userID: +userID, currentURL };
  const filters = { sport: '', brand: '', price: ''}

  const queryArr = [ cardsQueries.getCards(filters), userFavouritesQueries.getUserFavourites(userID) ];

  Promise.all(queryArr)
  .then((values) => {

    for (result of values) {
      if(!userID) {
        result.length > 0 ? templateVars.cards = result : templateVars.favourites = result;
      } else {
        if ('card_id' in result[0]){
          const favourites = result.map(favourite => favourite.card_id);
          templateVars.favourites = favourites;
        } else {
          templateVars.cards = result;
        }
      }
    }

    res.render('ch_cards', templateVars);
  });
});

module.exports = router;
