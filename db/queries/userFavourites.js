const db = require('../connection');

const getUserFavourites = ( userID ) => {
  return db.query(`
  SELECT card_id
  FROM user_favourites
  WHERE user_id = $1
  ORDER BY card_id
  `, [ userID ])
  .then(data => {
    return data.rows;
  })
};

module.exports = { getUserFavourites };
