const express = require('express');
const router  = express.Router();

// do this instead
  router.get('/', (req, res) => {

  // using encrypted cookies
  //random number for user id 1 to 5
req.session = null
  //assign session to a random user
  //console log session user

  // send the user somewhere
  const userID = null
  const templateVars = { userID }
  res.redirect('/')
});

module.exports = router;
