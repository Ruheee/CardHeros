const db = require('../connection');

const getCards = ( filters ) => {

  let varArr = [];
  let query = 'SELECT * FROM cards WHERE is_sold = false ';

  if(filters.sport) {
    varArr.push(filters.sport);
    query += `AND sport = $${varArr.length} `;
  }

  if(filters.brand) {
    varArr.push(filters.brand);
    query += `AND brand = $${varArr.length} `;
  }

  if(filters.price) {
    query += `ORDER BY price ${filters.price}`
  }

  return db.query(query, varArr)
  .then(data => {
    return data.rows;
  })
};

module.exports = { getCards };
