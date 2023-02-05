const db = require('../connection');

const getUser = ( userID ) => {
  return db.query('SELECT * FROM users WHERE id = $1;', [ userID ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUser };
