const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('ch_new_card.ejs');
});

module.exports = router;
