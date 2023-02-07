const express = require('express');
const router  = express.Router();
const sportsQuery = require('../db/queries/sports');
const brandQuery = require('../db/queries/brands');



// Renders EJS View and passes Sports and Brands info to EJS
router.get('/', (req, res) => {
  const templateVars = {}
  const queryArr = [sportsQuery.getSports(), brandQuery.getBrands()];
  Promise.all(queryArr)
  .then((values) => {
    templateVars[Object.keys(values[0][0])] = values[0];
    templateVars[Object.keys(values[1][0])] = values[1];
    res.render('ch_cards', templateVars)
  });
});


router.post('/', (req, res) => {
  //request information from the form
  //req.body.q = text entered in the form form index search bar
  const userSearch = req.body.q.toLowerCase()
  //arrays with all the sports and brands available to compare with the search
  const sportArr = ['soccer', 'baseball', 'football', 'basketball', 'hockey'];
  const brandArr = ['topps', 'panini', 'upper deck', 'bowman', 'fleer', 'futera', 'donrus', 'o-pee-chee'];
  //if the word entered by user is in the sport array
  if (sportArr.includes(userSearch)) {
    sportsQuery.getCardBySport(userSearch)
    .then(result => {
      const templateVars = { result }
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
      const templateVars = { result }
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

