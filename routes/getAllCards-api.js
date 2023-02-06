const express = require('express');
const router  = express.Router();
const getAllCardsQueries = require('../db/queries/getAllCards');

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

router.get('/', (req,res) => {

})
module.exports = router;
