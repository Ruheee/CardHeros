const express = require('express');
const router  = express.Router();
const getCardById = require('../db/queries/getCardByID');


router.get('/', (req, res) => {
  let templateVars = {  }
  const queryArr = [getCardById.getCardById()]
  Promise.all(queryArr)
  .then((response) => {
    templateVars['cards'] = response[0];
    // console.log(templateVars)
    res.render('ch_show_card', templateVars);
  })
})


module.exports = router;
