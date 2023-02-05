const db = require('../connection');

const getMessages = ( userID ) => {
  return db.query(`
  SELECT DISTINCT ON (card_id)
    id, sender_id, receiver_id, card_id, timestamp, message
  FROM messages
  WHERE sender_id = $1 OR receiver_id = $1
  ORDER BY card_id, timestamp DESC;
  `, [ userID ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMessages };
