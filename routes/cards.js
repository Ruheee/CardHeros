const express = require('express');
const router  = express.Router();
const sportsQuery = require('../db/queries/sports');
const brandQuery = require('../db/queries/brands');

const cardsQueries = require('../db/queries/cards');
const userFavouritesQueries = require('../db/queries/userFavourites');

router.get('/', (req, res) => {
  const userID = req.session.user_id;
  const templateVars = { userID: +userID };
  const filters = { sport: '', brand: '', price: ''}

  const queryArr = [ cardsQueries.getCards(filters), userFavouritesQueries.getUserFavourites(userID) ];

  Promise.all(queryArr)
  .then((values) => {

    for (result of values) {
      if ('card_id' in result[0]){
        const favourites = result.map(favourite => favourite.card_id);
        templateVars.favourites = favourites;
      } else {
        templateVars.cards = result;
      }
    }

    res.render('ch_cards', templateVars);
  });
});


router.post('/', (req, res) => {
  //request information from the form
  //req.body.q = text entered in the form form index search bar
  const userSearch = req.body.q.toLowerCase()
  //arrays with all the sports and brands available to compare with the search
  const sportArr = ['soccer', 'baseball', 'football', 'basketball', 'hockey'];
  const brandArr = ['topps', 'panini', 'upper deck', 'bowman', 'fleer', 'futera', 'donruss', 'o-pee-chee'];
  //if the word entered by user is in the sport array
  if (sportArr.includes(userSearch)) {
    sportsQuery.getCardBySport(userSearch)
    .then(result => {
      const userID = req.session.user_id;
      const templateVars = { userID, result }
      console.log(templateVars)
      res.render('search', templateVars)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  }
  //if the word enterd in the search is a brand
  if (brandArr.includes(userSearch)) {
    brandQuery.getCardByBrand(userSearch)
    .then(result => {
      const userID = req.session.user_id;
      const templateVars = { userID, result }
      res.render('search', templateVars)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  }

  //validate data with soccer, football, baseball or basketball
  //look into the database for the word entered in sports


});

module.exports = router;

