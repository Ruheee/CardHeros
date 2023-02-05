const express = require('express');
const router  = express.Router();
const sportsQuery = require('../db/queries/sports');
const brandQuery = require('../db/queries/brands')


router.get('/', (req, res) => {
  res.render('ch_cards');
});


router.post('/', (req, res) => {
  //request information from the form
  //req.body.q = text entered in the form form index search bar
  const userSearch = req.body.q.toLowerCase()
  const sportArr = ['soccer', 'baseball', 'football', 'basketball', 'hockey'];
  const brandArr = ['topps', 'panini', 'upper deck', 'bowman', 'fleer', 'futera', 'donrus', 'o-pee-chee'];

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

