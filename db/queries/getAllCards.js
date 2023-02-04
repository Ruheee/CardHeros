const db = require('../connection');


const getAllCards = () => {
  return db
  .query(`SELECT *
  FROM cards
  LIMIT 10;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllCards };
