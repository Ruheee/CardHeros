const express = require('express');
const router  = express.Router();
const brandQueries = require('../db/queries/brands');

router.get('/', (req,res) => {
  brandQueries.getBrands()
  .then(brands => {
    res.json({ brands });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})

module.exports = router;
