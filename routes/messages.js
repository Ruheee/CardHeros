const { query } = require('express');
const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');
const userQueries = require('../db/queries/user');

router.get('/', (req, res) => {
  const userID = 5;
  const templateVars = { userID: userID };

  const queryArr = [ messagesQueries.getMessages(userID) ];

Promise.all(queryArr).then((values) => {
  const messages = values[0];

  const userQueriesArr = messages.map(message => {
    return Promise.all([
      userQueries.getUser(message.sender_id),
      userQueries.getUser(message.receiver_id)
    ]).then(([ sender, receiver ]) => {
      return {
          id: message.id,
          sender_id: 5,
          sender: sender,
          receiver_id: 1,
          receiver: receiver,
          card_id: message.card_id,
          timestamp: message.timestamp,
          message: message.message
        };
      });
    });

    Promise.all(userQueriesArr)
    .then((result) => {
      templateVars.messages = result;
      res.render('ch_messages', templateVars);
    });
  });
});

module.exports = router;
