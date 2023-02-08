const express = require('express');
const router  = express.Router();
const userByCardIDQueries = require ('../db/queries/userByCardId');
const sendMessageQueries = require('../db/queries/sendMessage');

router.post('/:id', (req, res) => {
  const cardID = +req.params.id;
  const userID = +req.session.user_id;
  const message = req.body.message;

  const queryArr = [ userByCardIDQueries.getUserByCardID(cardID) ];

  Promise.all(queryArr).then((values) => {
    const receiverID = values[0][0].user_id;

    Promise.all([ sendMessageQueries.sendMessage(userID, receiverID, cardID, message) ])
    .then(data => {
      res.send('Message sent');
    })
  });
});

module.exports = router;
