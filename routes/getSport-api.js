const express = require('express');
const router  = express.Router();
const sportQueries = require('../db/queries/sports');


router.get('/', (req,res) => {
  sportQueries.getSports()
  .then(sports => {
    res.json({ sports });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})


module.exports = router;
