const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');
const userQueries = require('../db/queries/user');
const userByCardIDQueries = require ('../db/queries/userByCardId');

router.get('/:id', (req, res) => {
  const cardID = req.params.id;
  const userID = req.session.user_id;
  const templateVars = { userID: +userID };
  let messages;

  const queryArr = [ messagesQueries.getMessages(userID), userByCardIDQueries.getUserByCardID(cardID) ];

Promise.all(queryArr).then((values) => {

  for (result of values) {
    if ('name' in result[0]){
      templateVars.user = result;
    } else {
      messages = result;
    }
  }

  const userQueriesArr = messages.map(message => {
    return Promise.all([
      userQueries.getUser(message.sender_id),
      userQueries.getUser(message.receiver_id)
    ]).then(([ sender, receiver ]) => {
      return {
          id: message.id,
          sender_id: message.sender_id,
          sender: sender,
          receiver_id: message.receiver_id,
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
      res.render('ch_sidebar_messages', templateVars);
    });
  });
});

module.exports = router;
