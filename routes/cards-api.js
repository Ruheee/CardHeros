const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {
  //request information from the form
  //req.body.q = text entered in the form form index search bar
  console.log(req.body.q)
  //validate data with soccer, football, baseball or basketball
  //look into the database for the word entered in sports

  res.render('users');
});

module.exports = router;
