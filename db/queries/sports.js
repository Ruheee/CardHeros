const db = require('../connection');

const getSports = () => {
  return db
  .query(`SELECT DISTINCT sport
  FROM cards;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getSports };
