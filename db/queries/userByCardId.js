const db = require('../connection');

const getUserByCardID = ( cardID ) => {
  return db.query(`
  SELECT name
  FROM users
  JOIN cards
  ON cards.user_id = users.id
  WHERE cards.id = $1;`, [ cardID ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUserByCardID };
