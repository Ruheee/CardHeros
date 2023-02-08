const express = require('express');
const router  = express.Router();
const userByCardIDQueries = require ('../db/queries/userByCardId');
const cardQueries = require ('../db/queries/getCard');

router.get('/:id', (req, res) => {
  const cardID = req.params.id;
  const templateVars = {};

  const queryArr = [ userByCardIDQueries.getUserByCardID(cardID), cardQueries.getCard(cardID) ];

  Promise.all(queryArr).then((values) => {

    for (result of values) {
      if ('name' in result[0]) {
        templateVars.user = result;
      } else {
        templateVars.card = result;
      }
    }

  })
    .then((result) => {
      res.render('ch_new_message', templateVars);
    });
});

module.exports = router;
