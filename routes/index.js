const { query } = require('express');
const express = require('express');
const router  = express.Router();
const hotCardsQuery = require('../db/queries/hot-cards')

router.get('/', (req, res) => {

  hotCardsQuery.getHotCards()
    .then(result => {
      const currentURL = '/'
      const userID = req.session.user_id
      const templateVars = { userID, result, currentURL }
      res.render('index', templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

module.exports = router;
