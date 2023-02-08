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

// const getAllCards = (pageNumber) => {
//   const LIMIT = 8;
//   const OFFSET = pageNumber * LIMIT;
//   return db
//   .query(`SELECT *
//   FROM cards
//   LIMIT $1
//   OFFSET $2;`, [ LIMIT, OFFSET ])
//     .then(data => {
//       return data.rows;
//     });
// };

// // Function query to return single sport after pressing load more cards
// const getAllCardsBySports = (sport, pageNumber) => {
//   const LIMIT = 8;
//   const OFFSET = pageNumber * LIMIT;
//   const sportArr = sport;
//   return db
//   .query(`SELECT *
//   FROM cards
//   OR sport = $3
//   LIMIT $1
//   OFFSET $2;`, [ LIMIT, OFFSET, sportArr ])
//     .then(data => {
//       return data.rows;
//     });
// };

// module.exports = { getAllCards, getAllCardsBySports };
