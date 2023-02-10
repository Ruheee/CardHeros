const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');
const cardMessageQueries = require('../db/queries/cardMessages');
const userQueries = require('../db/queries/user');

router.get('/:id', (req, res) => {
  const userID = req.session.user_id;
  const cardID = req.params.id;
  const templateVars = { userID };

  const queryArr = [ messagesQueries.getMessages(userID, cardID) ];

  Promise.all(queryArr).then((values) => {
    templateVars.messages = values[0];
    res.render('ch_message', templateVars);
  });
});

module.exports = router;
