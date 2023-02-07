const db = require('../connection');

const getSports = () => {
  return db
  .query(`SELECT DISTINCT sport
  FROM cards;`)
    .then(data => {
      return data.rows;
    });
};

<<<<<<< HEAD
const getCardBySport = sport => {
  return db
    .query(`SELECT * FROM cards WHERE sport = $1;`, [sport])
    .then(data => {
      return data.rows;
    })
};

module.exports = { getSports, getCardBySport };
=======
const getSoccer = () => {
  return db
  .query(`SELECT *
  FROM cards
  WHERE sport = $1;`, ['soccer'])
    .then(data => {
      return data.rows;
    });
};

const getFootball = () => {
  return db
  .query(`SELECT *
  FROM cards
  WHERE sport = $1;`, ['football'])
    .then(data => {
      return data.rows;
    });
};

const getHockey = () => {
  return db
  .query(`SELECT *
  FROM cards
  WHERE sport = $1;`, ['hockey'])
    .then(data => {
      return data.rows;
    });
};

const getBasketball = () => {
  return db
  .query(`SELECT *
  FROM cards
  WHERE sport = $1;`, ['basketball'])
    .then(data => {
      return data.rows;
    });
};

const getBaseball = () => {
  return db
  .query(`SELECT *
  FROM cards
  WHERE sport = $1;`, ['baseball'])
    .then(data => {
      return data.rows;
    });
};


module.exports = { getSports, getSoccer, getBasketball, getHockey, getFootball, getBaseball  };
>>>>>>> cards_view
