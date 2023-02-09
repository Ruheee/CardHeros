const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};


const getCardInfo = (cardID) => {
  return db
  .query(`
  SELECT cards.*, users.name as seller_name
  FROM cards
  JOIN users ON users.id = user_id
  WHERE cards.id = $1;
  `, [cardID])
  .then(data => {
    return data.rows[0];
  });
}


module.exports = { getUsers, getCardInfo };
