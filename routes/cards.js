const express = require('express');
const router  = express.Router();
const sportQueries = require('../db/queries/sports');
const brandQueries = require('../db/queries/brands');


// Renders EJS View and passes Sports and Brands info to EJS
router.get('/', (req, res) => {
  const templateVars = {}
  const queryArr = [sportQueries.getSports(), brandQueries.getBrands()];
  Promise.all(queryArr)
  .then((values) => {
    templateVars[Object.keys(values[0][0])] = values[0];
    templateVars[Object.keys(values[1][0])] = values[1];
    res.render('ch_cards', templateVars)
  });
});




module.exports = router;


