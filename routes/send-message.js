const { query } = require('express');
const express = require('express');
const router  = express.Router();
const messageQueries = require('../db/queries/message');
const sendMessageQueries = require('../db/queries/sendMessage');

router.post('/:id', (req, res) => {
  const userID = 5;
  const messageID = req.params.id;
  const message = req.body.message;

  const queryArr = [ messageQueries.getMessage(messageID) ];

  Promise.all(queryArr).then((values) => {
    let senderID = values[0][0].sender_id;
    let receiverID = values[0][0].receiver_id;
    const cardID = values[0][0].card_id;

    if (userID === receiverID) {
      receiverID = senderID;
      senderID = userID;
    }

    Promise.all([ sendMessageQueries.sendMessage(senderID, receiverID, cardID, message) ])
    .then(data => {
      res.send('Message sent');
    });

  });
});

module.exports = router;
