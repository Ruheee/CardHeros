const db = require('../connection');

const updateCard = (cardID, userID, title, sport, player_name, brand, price, is_sold, description, card_front_url, card_back_url) => {
  return db
  .query(`UPDATE cards
          SET user_id = $2,
              title = $3,
              sport = $4,
              player_name = $5,
              brand = $6,
              price = $7,
              is_sold = $8,
              description = $9,
              card_front_url = $10,
              card_back_url = $11
            WHERE id = $1`, [cardID, userID, title, sport, player_name, brand, price, is_sold, description, card_front_url, card_back_url])
    .then(data => {
      return data.rows;
    });
};
module.exports = { updateCard };
