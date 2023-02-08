const express = require('express');
const router  = express.Router();
const cardQueries = require('../db/queries/getCard');

router.get('/:id', (req, res) => {
  const userID = req.session.user_id;
  const cardID = req.params.id;
  const queryArr = [ cardQueries.getCard(cardID) ];

  Promise.all(queryArr).then((values) => {
    const templateVars = {
      sender_id: +userID,
      card_id: +cardID,
      receiver_id: values[0][0].user_id
    }

    res.render('ch_messages', templateVars);
  });
});

module.exports = router;
