const db = require('../connection');

const getFavourites = ( userID ) => {
  return db.query(`
  SELECT cards.*
  FROM users
  JOIN user_favourites ON users.id = user_favourites.user_id
  JOIN cards ON user_favourites.card_id = cards.id
  WHERE users.id = $1
  ORDER BY cards.id DESC;
  `, [ userID ])
    .then(data => {
      return data.rows;
    });
};

const removeFromFavourites = (userID, cardID) => {
  return db
  .query(`
  DELETE
  FROM user_favourites
  WHERE user_id = $1
  AND card_id = $2;
  `, [userID, cardID])
}
module.exports = { getFavourites, removeFromFavourites };
