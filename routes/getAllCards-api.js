const express = require('express');
const router  = express.Router();
const getAllCardsQueries = require('../db/queries/getAllCards');

router.get('/', (req,res) => {
  getAllCardsQueries.getAllCards()
  .then(cards => {
    res.json({ cards });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})

module.exports = router;
