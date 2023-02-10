const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const currentURL = '/'
  const userID = req.session.user_id;
  const templateVars = {currentURL, userID, id: '', user_id: '', title: '', sport: '', player_name: '', brand: '', price: '', is_sold: '', description: '', card_front_url: '', card_back_url: ''};
  res.render('ch_new_edit_card.ejs', templateVars);
});

module.exports = router;
