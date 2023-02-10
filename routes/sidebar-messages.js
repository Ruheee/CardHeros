const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');

router.get('/', (req, res) => {
  const userID = req.session.user_id;
  const templateVars = { userID, user:[{}] };
  const lastMessages = [];
  const cardIDs = new Map();

  const queryArr = [ messagesQueries.getMessages(userID) ];

Promise.all(queryArr).then((values) => {
  const messages = values[0];

  for (const message of messages) {
    if (!cardIDs.has(message.card_id)) {
      cardIDs.set(message.card_id, message);
    } else {
      cardIDs.set(message.card_id, message);
    }
  }

  lastMessages.push(...cardIDs.values());

  templateVars.messages = lastMessages;
  res.render('ch_sidebar_messages', templateVars);
  });
});

module.exports = router;
