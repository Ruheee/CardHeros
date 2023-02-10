// const db = require('../connection');

// const getMessages = ( userID ) => {
//   return db.query(`
//   WITH cte AS (
//     SELECT DISTINCT ON (card_id)
//     id, sender_id, receiver_id, card_id, timestamp, message
//     FROM messages
//     WHERE sender_id = $1 OR receiver_id = $1
//     ORDER BY card_id, timestamp DESC
//   )
//   SELECT *
//   FROM cte
//   ORDER BY timestamp DESC
//   `, [ userID ])
//     .then(data => {
//       return data.rows;
//     });
// };

// module.exports = { getMessages };

const db = require('../connection');

const getMessages = (userID, cardID = '', invert = false) => {

  let varArr = [ userID ];
  let query = `
  SELECT m.id,
  m.sender_id AS sender_id,
  u1.name AS sender,
  m.receiver_id AS receiver_id,
  u2.name AS receiver,
  m.card_id, m.timestamp,
  m.message
  FROM messages m
  JOIN users u1 ON m.sender_id = u1.id
  JOIN users u2 ON m.receiver_id = u2.id
  WHERE (sender_id = $1 OR receiver_id = $1)
  `;

  if(cardID) {
    varArr.push(cardID);
    query += `AND m.card_id = $2`;
  }

  query += invert ? `ORDER BY timestamp ASC;` : `ORDER BY timestamp DESC`

  return db.query(query, varArr)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMessages };
