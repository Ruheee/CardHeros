const express = require('express');
const router  = express.Router();
const userByCardIDQueries = require ('../db/queries/userByCardId');
const cardQueries = require ('../db/queries/getCard');
const convoQueries = require ('../db/queries/conversations');

router.get('/:id', (req, res) => {
  const userID = req.session.user_id;
  const cardID = req.params.id;
  const templateVars = {};
  let messageID;

  const queryArr = [ userByCardIDQueries.getUserByCardID(cardID), cardQueries.getCard(cardID) ];

  Promise.all(queryArr)
  .then((values) => {

    for (result of values) {
      if ('name' in result[0]) {
        templateVars.user = result;
      } else {
        templateVars.card = result;
      }
    }
    Promise.all([ convoQueries.getConversations( userID, cardID ) ])
    .then((values) => {
      // If there is an existing convo, render the regular message
      if(values[0].length > 0){
        messageID = values[0][0].id;
        console.log(messageID)
      }
    })
    .then((result) => {
      console.log(messageID)
      messageID ? res.redirect(`/message/${messageID}`) : res.render('ch_new_message', templateVars);
    });
  })
});

module.exports = router;
