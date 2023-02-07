const db = require('../connection');


const getAllCards = (pageNumber) => {
  const LIMIT = 8;
  const OFFSET = pageNumber * LIMIT;
  return db
  .query(`SELECT *
  FROM cards
  LIMIT $1
  OFFSET $2;`, [ LIMIT, OFFSET ])
    .then(data => {
      return data.rows;
    });
};


// Function query to return single sport after pressing load more cards
const getAllCardsBySports = (sport, pageNumber) => {
  const LIMIT = 8;
  const OFFSET = pageNumber * LIMIT;
  const sportArr = sport;
  return db
  .query(`SELECT *
  FROM cards
  OR sport = $3
  LIMIT $1
  OFFSET $2;`, [ LIMIT, OFFSET, sportArr ])
    .then(data => {
      return data.rows;
    });
};





module.exports = { getAllCards, getAllCardsBySports };
