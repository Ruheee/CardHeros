const express = require('express');
const router  = express.Router();
const getCardById = require('../db/queries/getCardByID');


router.get('/:id', (req, res) => {
  let templateVars = {}
  const id = req.params.id
  const queryArr = [getCardById.getCardById(id)]
  Promise.all(queryArr)
  .then((response) => {
    templateVars['cards'] = response;
    res.render('ch_show_card', templateVars);
  })
})




module.exports = router;
