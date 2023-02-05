const db = require('../connection');


const getBrands = () => {
  return db
  .query(`SELECT DISTINCT brand
  FROM cards;`)
    .then(data => {
      return data.rows;
    });
};

const getCardByBrand = brand => {
  return db
  .query(`SELECT *
    FROM cards
    WHERE brand = $1;`, [brand])
  .then(data => {
    return data.rows;
  })
}

module.exports = { getBrands, getCardByBrand };
