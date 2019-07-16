const db = require('../data/dbConfig');

module.exports = {
  insert: function (newCar) {
    return db('cars')
    .insert(newCar)
    .then(([id]) => this.get(id));
  },

  get: function (id = null) {
    if(id) {
      return db('cars')
        .where({ id });
    }
    return db('cars');
  },

  update: function (id, car) {
    return db('cars')
      .where({ id })
      .update(car)
      .then(count => (count > 0 ? this.get(id) : null));
  },
}
