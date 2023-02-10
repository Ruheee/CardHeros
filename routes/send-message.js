const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');
const sendMessageQueries = require('../db/queries/sendMessage');

router.post('/:id', (req, res) => {
  const userID = req.session.user_id;
  const cardID = req.params.id;
  const message = req.body.message;

  const queryArr = [ messagesQueries.getMessages(userID, cardID) ];

  Promise.all(queryArr).then((values) => {
    const senderID = userID;
    const receiverID = values[0][0].sender_id === userID ? values[0][0].receiver_id : values[0][0].sender_id;

    Promise.all([ sendMessageQueries.sendMessage(senderID, receiverID, cardID, message) ])
    .then(data => {
      console.log(data);
      res.send('Message sent');
    });
  });
});

module.exports = router;
