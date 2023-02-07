const express = require('express');
const router  = express.Router();
const sportQueries = require('../db/queries/sports');

//Filter by sports
router.get('/soccer', (req,res) => {

  sportQueries.getSoccer()
  .then(cards => {
    res.json({ cards });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})

router.get('/basketball', (req,res) => {
  sportQueries.getBasketball()
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

router.get('/hockey', (req,res) => {
  sportQueries.getHockey()
  .then(cards => {
    res.json({ cards });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})

router.get('/football', (req,res) => {
  sportQueries.getFootball()
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
