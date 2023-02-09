const db = require('../connection');



const getCardById = (cardId) => {
  return db
  .query(`
  SELECT *
  FROM cards
  WHERE id = $1;
  `, [cardId])
  .then((result) => {
    return result.rows[0];
  })
};


module.exports = { getCardById };
