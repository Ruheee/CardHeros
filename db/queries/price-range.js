const db = require('../connection');

const getCardsByPrice = () => {
  return db
    .query(`
    SELECT *
    FROM cards
    ORDER BY price DESC;`)
      .then(data => {
        return data.rows;
      });
};

module.exports = { getCardsByPrice };
