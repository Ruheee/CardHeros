const db = require('../connection');

const getCard = ( cardID ) => {
  return db.query(`
  SELECT cards.*, users.name
  FROM cards
  JOIN users
  ON cards.user_id = users.id
  WHERE cards.id = $1;
  `, [ cardID ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getCard };
