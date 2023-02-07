const db = require('../connection');

const getCardsFromHighest = () => {
  return db
    .query(`
    SELECT *
    FROM cards
    ORDER BY price DESC;`)
      .then(data => {
        return data.rows;
      });
};

const getCardsFromLowest = () => {
  return db
    .query(`
    SELECT *
    FROM cards
    ORDER BY price;`)
      .then(data => {
        return data.rows;
      });
};

module.exports = { getCardsFromHighest, getCardsFromLowest };
