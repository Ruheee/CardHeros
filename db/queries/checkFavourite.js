const db = require('../connection');

const checkFavourite = (userID, cardID) => {
  return db.query(`
  SELECT count(*)
  FROM user_favourites
  WHERE user_id = $1
  AND card_id = $2`, [userID, cardID])
    .then(data => {
      return data.rows;
    });
};

module.exports = { checkFavourite };
