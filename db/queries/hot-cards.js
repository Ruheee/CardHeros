const db = require('../connection');

const getHotCards = () => {
  //random card generator
  let randomIdArr = []
  for (let i = 1; i <= 4; i++) {
    let num = Math.floor(Math.random() * (51 - 1) + 1)
    randomIdArr.push(num)
  }
  return db
    .query(`SELECT * FROM cards
      WHERE id=$1 OR id=$2 OR id=$3 OR id=$4;`, randomIdArr)
    .then(data => {
      return data.rows;
    })
};

module.exports = { getHotCards };
