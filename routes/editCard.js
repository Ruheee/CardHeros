const express = require('express');
const router  = express.Router();
const cardQueries = require('../db/queries/getCard');

router.get('/:id/edit', (req, res) => {
  const currentURL = '/cards/edit'
  const userID = req.session.user_id;
  const cardID = req.params.id;
  const queryArr = [ cardQueries.getCard(cardID) ];

  Promise.all(queryArr).then((values) => {
    const templateVars = {id, user_id, title, sport, player_name, brand, price, is_sold, description, card_front_url, card_back_url} = values[0][0];
    templateVars.userID = userID;
    templateVars.currentURL = currentURL;
    res.render('ch_new_edit_card.ejs', templateVars);
  });
});

module.exports = router;
