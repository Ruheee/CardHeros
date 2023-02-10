const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');

router.get('/', (req, res) => {
  const currentURL = '/'
  const userID = req.session.user_id;
  const cardID = '';
  const templateVars = { currentURL, userID, cardID };

  const queryArr = [ messagesQueries.getMessages(userID) ];

  Promise.all(queryArr).then((values) => {
    templateVars.firstMessage = values[0][0].card_id;
    res.render('ch_messages', templateVars);
  });
});

module.exports = router;
