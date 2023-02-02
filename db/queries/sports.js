const db = require('../connection');

const getSports = (sport) => {
  return db
  .query(`SELECT *
  FROM cards
  WHERE cards.sport = $1`, [sport])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getSports };
