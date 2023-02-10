const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');

router.get('/:id', (req, res) => {
  const userID = req.session.user_id;
  const cardID = req.params.id;
  const templateVars = { userID };

  const queryArr = [ messagesQueries.getMessages(userID, cardID, true) ];

  Promise.all(queryArr).then((values) => {
    templateVars.messages = values[0];
    res.render('ch_message', templateVars);
  });
});

module.exports = router;
