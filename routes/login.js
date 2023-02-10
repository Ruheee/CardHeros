const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/user');

router.get('/', (req, res) => {
  const origin = req.query.origin;
  const userID = Math.floor(Math.random() * (6 - 1) + 1);
  req.session.user_id = userID;

  const queryArr = [ userQueries.getUser(userID) ]

  Promise.all(queryArr).then((values) => {
    console.log(values);
    req.session.user_name = values[0][0].name;
    res.redirect(origin);
  });

});

module.exports = router;
