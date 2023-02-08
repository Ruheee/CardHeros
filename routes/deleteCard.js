const express = require('express');
const router  = express.Router();
const deleteCardQueries = require('../db/queries/deleteCard');

router.post('/:id/delete', (req, res) => {
  const cardID = +req.params.id;
  const queryArr = [ deleteCardQueries.deleteCard(cardID) ];

  Promise.all(queryArr).then((values) => {
    res.redirect('/admin');
  });
});

module.exports = router;
