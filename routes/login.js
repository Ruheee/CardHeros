const express = require('express');
const router  = express.Router();

// do this instead
  router.get('/', (req, res) => {

  // using encrypted cookies
  //random number for user id 1 to 5
const randomUserId = () => {
  return Math.floor(Math.random() * (6 - 1) + 1)
}
  //assign session to a random user
  req.session.user_id = randomUserId()

  // send the user somewhere
  const userID = req.session.user_id
  const templateVars = { userID }
  res.redirect('/')
});

module.exports = router;
