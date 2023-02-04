const db = require('../connection');

const getBrands = () => {
  return db
  .query(`SELECT DISTINCT brand
  FROM cards;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getBrands };
