const express = require('express');
const router  = express.Router();
const getAllCardsQueries = require('../db/queries/getAllCards');
const priceMenuQuery = require('../db/queries/price-range');
const sportQueries = require('../db/queries/sports')


// Load the next 10 cards in the array
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


// Filter cards by price
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

router.get('/baseball', (req,res) => {
  sportQueries.getBaseball()
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
