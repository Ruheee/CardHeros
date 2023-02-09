const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');

router.get('/', (req, res) => {
  const currentURL = '/messages'
  const userID = req.session.user_id;
  const templateVars = { userID: +userID, card_id: '', currentURL };

  const queryArr = [ messagesQueries.getMessages(userID) ];

  Promise.all(queryArr).then((values) => {
    templateVars.firstMessage = values[0][0].id;
    res.render('ch_messages', templateVars);
  });
});

module.exports = router;
