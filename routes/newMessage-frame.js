const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');
const cardByIDQueries = require('../db/queries/getCardByID');

router.get('/:id', (req, res) => {
  const userID = req.session.user_id;
  const cardID = req.params.id;
  const templateVars = { userID };

  const queryArr = [ messagesQueries.getMessages(userID, cardID, true), cardByIDQueries.getCardByID(cardID) ];

  Promise.all(queryArr).then((values) => {

    for (result of values) {
      result[0] !== undefined && 'sport' in result[0] ? templateVars.card = result : templateVars.messages = result;
    }

    templateVars.messages.length > 0 ? res.redirect(`/message/${cardID}`) : res.render('ch_new_message', templateVars);
  });
});

module.exports = router;
