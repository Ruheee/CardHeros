const db = require('../connection');

const getFavourites = ( userID = 1 ) => {
  return db.query(`
  SELECT cards.*
  FROM users
  JOIN user_favourites ON users.id = user_favourites.user_id
  JOIN cards ON user_favourites.card_id = cards.id
  WHERE users.id = $1;
  `, [ userID ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getFavourites };
