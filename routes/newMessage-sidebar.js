const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');
const userByCardQueries = require('../db/queries/userByCardId');

router.get('/:id', (req, res) => {
  const userID = req.session.user_id;
  const cardID = req.params.id
  const templateVars = { userID };
  const lastMessages = [];
  const cardIDs = new Set();
  let messages;

  const queryArr = [ messagesQueries.getMessages(userID), userByCardQueries.getUserByCardID(cardID) ];

Promise.all(queryArr).then((values) => {
  console.log(values);

  for (result of values) {
    'sport' in result[0] ? templateVars.user = result : messages = result;
  }

  for (const message of messages) {
    if (!cardIDs.has(message.card_id)) {
      cardIDs.add(message.card_id);
      lastMessages.push(message);
    }
  }


  templateVars.messages = lastMessages;
  console.log(templateVars);
  res.render('ch_sidebar_messages', templateVars);
  });
});

module.exports = router;
