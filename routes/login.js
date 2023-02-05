const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  // req.session.user_id = req.params.id;
  // Generates random number for used id from 1 to 5
  const generateRdmUser = () => {
    return Math.floor(Math.random() * (6 - 1) + 1);
  }

  res.cookie('user_id', generateRdmUser())
  // const userId = req.cookies['user_id'];
  console.log(req.cookies)
  res.render('index');
})

// // console.log(generateRdmUser());

// // do this instead
// app.get('/:id', (req, res) => {
//   // using encrypted cookies
//   // req.session.user_id = req.params.id;

//   // or using plain-text cookies
//   res.cookie('user_id', req.params.id);

//   // send the user somewhere
//   res.redirect('/');
// });

module.exports = router;
