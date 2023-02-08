const express = require('express');
const router  = express.Router();
const cardQueries = require('../db/queries/getCard');

router.get('/:id/edit', (req, res) => {
  const cardID = req.params.id;
  const queryArr = [ cardQueries.getCard(cardID) ];

  Promise.all(queryArr).then((values) => {
    const templateVars = {id, user_id, title, sport, player_name, brand, price, is_sold, description, card_front_url, card_back_url} = values[0][0];
    res.render('ch_new_edit_card.ejs', templateVars);
  });
});

module.exports = router;
