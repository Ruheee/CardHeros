const db = require('../connection');

const addCardToFav = (userID,cardID) => {
  return db
  .query(`INSERT INTO user_favourites (user_id, card_id)
  VALUES ($1, $2)`, [userID, cardID])
    .then(data => {
      return data.rows;
    });
};

const checkFavourite = (userID, cardID) => {
  return db
  .query(`SELECT user_id
  FROM user_favourites
  where user_id = $1
  AND card_id = $2`, [userID, cardID])
    .then(data => {
      return data.rows[0];
    });
};
module.exports = { addCardToFav, checkFavourite };
