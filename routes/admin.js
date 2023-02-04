const express = require('express');
const router  = express.Router();
const favouritesQueries = require('../db/queries/favourites');

router.get('/', (req, res) => {
  // DELETE: Set a random number between 1 and 5 as the user id;
  // req.session.userID = Math.floor(Math.random() * 5) + 1;
  /*----------------------------------------------------------*/

  const userID = 1;
  favouritesQueries.getFavourites( userID )
  .then(data => {
    const templateVars = { userID, favourites: data };
    res.render('ch_admin', templateVars);
    console.log(templateVars);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send('An error occurred');
  });
});

module.exports = router;
