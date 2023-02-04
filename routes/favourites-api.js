const express = require('express');
const router  = express.Router();
const favouritesQueries = require('../db/queries/favourites');

router.get('/', (req, res) => {
  favouritesQueries.getFavourites()
    .then(favourites => {
      res.json({ favourites });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
