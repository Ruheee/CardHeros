const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('ch_cards');
});

router.post('brand')

module.exports = router;
