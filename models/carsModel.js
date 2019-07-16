const db = require('../data/dbConfig');

module.exports = {
  insert: function (newCar) {
    return db('cars')
    .insert(newCar)
    .then(([id]) => this.get(id));
  },
}
