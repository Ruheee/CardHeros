const db = require('../connection');

const deleteCard = (cardID) => {
  return db
  .query(`DELETE FROM cards WHERE id = $1`, [cardID])
    .then(data => {
      return data.rows;
    });
};
module.exports = { deleteCard };
