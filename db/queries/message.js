const db = require('../connection');

const getMessage = ( messageID ) => {
  return db.query(`
    SELECT *
    FROM messages
    WHERE id = $1
  `, [ messageID ])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMessage };
