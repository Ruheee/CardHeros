const db = require('../connection');



const getCardById = () => {
  return db
  .query(`
  SELECT *
  FROM cards
  WHERE id = 11
  `, )
  .then((result) => {
    return result.rows;
  })
};


module.exports = { getCardById };
