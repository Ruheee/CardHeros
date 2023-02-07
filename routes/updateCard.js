const express = require('express');
const router  = express.Router();
const updateCardQueries = require('../db/queries/updateCard');

router.post('/:id/edit', (req, res) => {
  const userID = +req.session.user_id;
  const cardID = +req.params.id;
  const { title, sport, player_name, brand, description, card_front_url, card_back_url } = req.body;
  let { price, is_sold } = req.body;

  is_sold = is_sold === 'true' ? true : false;
  price = +price;

  const queryArr = [ updateCardQueries.updateCard(cardID, userID, title, sport, player_name, brand, price, is_sold, description, card_front_url, card_back_url) ];

  Promise.all(queryArr).then((values) => {
    res.redirect('/admin');
  });
});

module.exports = router;
