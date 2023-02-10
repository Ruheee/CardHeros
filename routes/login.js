const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const origin = req.query.origin;
  req.session.user_id = Math.floor(Math.random() * (6 - 1) + 1);

  res.redirect(origin);
});

module.exports = router;
