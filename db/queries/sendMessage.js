const db = require('../connection');

const sendMessage = ( senderID, receiverID, cardID, message ) => {
  return db.query(`
    INSERT INTO messages (sender_id, receiver_id, card_id, message)
    VALUES ($1, $2, $3, $4)
  `, [ senderID, receiverID, cardID, message ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { sendMessage };
