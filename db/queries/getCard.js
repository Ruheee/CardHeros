const db = require('../connection');

const getCard = ( cardID ) => {
  return db.query(`
  SELECT *
  FROM cards
  WHERE id = $1;
  `, [ cardID ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getCard };
