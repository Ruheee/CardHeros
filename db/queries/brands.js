const db = require('../connection');


const getBrands = (brand) => {
  return db
  .query(`SELECT *
  FROM cards
  WHERE cards.brand = $1;`, [brand])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getBrands };
