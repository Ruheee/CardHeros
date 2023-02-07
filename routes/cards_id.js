const express = require('express');
const router  = express.Router();


router.get('/', (req, res) => {
  res.render('ch_show_card');
})


module.exports = router;
