const { query } = require('express');
const express = require('express');
const router  = express.Router();
const messagesQueries = require('../db/queries/messages');

router.get('/', (req, res) => {
  const userID = 5;
  const templateVars = { userID: userID };

  const queryArr = [ messagesQueries.getMessages(userID) ];

  Promise.all(queryArr).then((values) => {
    console.log(values)

    res.render('ch_messages', templateVars);
  });
});

module.exports = router;
