const db = require('../connection');

const getCardsByPrice = (priceRange) => {
  return db
    .query(`
    SELECT *
    FROM cards
    WHERE price >= $1
    AND price <= $1;`, [priceRange])
      .then(data => {
        return data.rows;
      });
};

module.exports = { getCardsByPrice };
