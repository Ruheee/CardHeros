const db = require('../connection');

const getSports = () => {
  return db
  .query(`SELECT DISTINCT sport
  FROM cards;`)
    .then(data => {
      return data.rows;
    });
};

const getCardBySport = sport => {
  return db
    .query(`SELECT * FROM cards WHERE sport = $1;`, [sport])
    .then(data => {
      return data.rows;
    })
};

module.exports = { getSports, getCardBySport };
