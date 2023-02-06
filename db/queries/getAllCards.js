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





module.exports = { getAllCards };
