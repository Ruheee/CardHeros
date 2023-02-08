const express = require('express');
const router  = express.Router();
const cardQueries = require('../db/queries/cards');

router.get('/', (req, res) =>{
  const filters = req.query;

  cardQueries.getCards(filters)
    .then(cards => {
      res.json({ cards });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
