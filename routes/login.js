const express = require('express');
const router  = express.Router();

// do this instead
router.get('/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;
  console.log(req.session.user_id)

  // or using plain-text cookies
  // res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

module.exports = router;
