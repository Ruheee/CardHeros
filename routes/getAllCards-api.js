const express = require('express');
const router  = express.Router();
const getAllCardsQueries = require('../db/queries/getAllCards');
const priceMenuQuery = require('../db/queries/price-range');

router.get('/', (req,res) => {
  const PAGENUMBER = req.query.pageNumber
  getAllCardsQueries.getAllCards(PAGENUMBER)
  .then(cards => {
    res.json({ cards });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})

router.get('/highestPrice', (req,res) => {
  priceMenuQuery.getCardsFromHighest()
  .then(cards => {
    res.json({ cards });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})

router.get('/lowestPrice', (req,res) => {
  priceMenuQuery.getCardsFromLowest()
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
