const express = require('express');
const router  = express.Router();
const sportsQuery = require('../db/queries/sports');


router.get('/', (req, res) => {
  res.render('ch_cards');
});


router.post('/', (req, res) => {
  //request information from the form
  //req.body.q = text entered in the form form index search bar
  const sport = req.body.q
  //validate data with soccer, football, baseball or basketball
  //look into the database for the word entered in sports
  sportsQuery.getCardBySport(sport)
    .then(result => {
      const templateVars = { result }
      // console.log(templateVars.result[0])
      // res.json({ result });
      res.render('search', templateVars)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

module.exports = router;

