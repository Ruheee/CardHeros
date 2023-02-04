const db = require('../connection');

const getMyCards = ( userID ) => {
  return db.query(`
  SELECT *
  FROM cards
  WHERE user_id = $1;
  `, [ userID ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMyCards };
