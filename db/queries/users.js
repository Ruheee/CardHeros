const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUsersName = (userID) => {
  return db.query (`
  SELECT *
  FROM users
  WHERE id = $1;`,[userID])
  .then(data => {
    return data.rows;
  });
}

module.exports = { getUsers, getUsersName };
