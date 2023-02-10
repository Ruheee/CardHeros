const express = require('express');
const router  = express.Router();
const cardByIDQueries = require('../db/queries/getCardByID');

router.get('/:id', (req, res) => {
  const currentURL = '/'
  const userID = req.session.user_id;
  const cardID = req.params.id;
  const queryArr = [ cardByIDQueries.getCardByID(cardID) ];

  Promise.all(queryArr).then((values) => {
    console.log(values);

    const templateVars = {
      userID: userID,
      sender_id: userID,
      receiver_id: values[0][0].user_id,
      cardID: cardID,
      currentURL
    }

    res.render('ch_messages', templateVars);
  });
});

module.exports = router;
