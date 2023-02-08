const db = require('../connection');

const addCardToFav = (userID,cardID) => {
  return db
  .query(`INSERT INTO user_favourites (user_id, card_id)
  VALUES ($1, $2)`, [userID, cardID])
    .then(data => {
      return data.rows;
    });
};
module.exports = { addCardToFav };
