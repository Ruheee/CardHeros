const db = require('../connection');

const addNewCard = (userID, title, sport, player_name, brand, price, is_sold, description, card_front_url, card_back_url) => {
  return db
  .query(`INSERT INTO cards (user_id, title, sport, player_name, brand, price, is_sold, description, card_front_url, card_back_url)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [userID, title, sport, player_name, brand, price, is_sold, description, card_front_url, card_back_url])
    .then(data => {
      return data.rows;
    });
};
module.exports = { addNewCard };
