const db = require('../connection');

const getConversations = ( userID, cardID ) => {
  return db.query(`
  SELECT *
  FROM messages
  WHERE sender_id = $1
  AND card_id = $2
  ORDER BY timestamp DESC
  `, [ userID, cardID ])
  .then(data => {
    return data.rows;
  });
};

module.exports = { getConversations };
