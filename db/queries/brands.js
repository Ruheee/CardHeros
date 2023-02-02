const db = require('../connection');


const getBrands = () => {
  return db.query('SELECT * FROM brands;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getBrands };
