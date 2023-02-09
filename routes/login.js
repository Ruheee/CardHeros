const express = require('express');
const router  = express.Router();

// do this instead
  router.get('/', (req, res) => {

  // get origin
  const origin = req.query.origin;

  // using encrypted cookies
  //random number for user id 1 to 5
  const randomUserId = () => {
    return Math.floor(Math.random() * (6 - 1) + 1)
  }
  //assign session to a random user
  req.session.user_id = randomUserId()

  // send the user somewhere
  const userID = req.session.user_id

  // verify if the user is on /cards and keep them there
  // otherwise, redirect them to /

  res.redirect(origin);
});

module.exports = router;
