const db = require('../connection');

const getCardByID = ( cardID ) => {
  return db
  .query(`
  SELECT cards.*, users.name AS user_name
  FROM cards
  JOIN users
  ON cards.user_id = users.id
  WHERE cards.id = $1;
  `, [ cardID ])
  .then((result) => {
    return result.rows;
  })
};

module.exports = { getCardByID };
