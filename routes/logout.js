const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  let origin = req.query.origin;
  req.session = null

  res.redirect(origin);
});

module.exports = router;
