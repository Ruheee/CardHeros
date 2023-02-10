const db = require('../connection');

const getCardByID = ( cardID ) => {
  return db
  .query(`
  SELECT *
  FROM cards
  WHERE id = $1;
  `, [ cardID ])
  .then((result) => {
    return result.rows;
  })
};

module.exports = { getCardByID };
