const db = require('../connection');

const getCardMessage = ( senderID, receiverID, cardID ) => {
  return db.query(`
    SELECT *
    FROM messages
    WHERE card_id = $3 AND
    (sender_id = $1 OR receiver_id = $1) AND
    (sender_id = $2 OR receiver_id = $2)
    ORDER BY timestamp ASC
  `, [ senderID, receiverID, cardID ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getCardMessage };
