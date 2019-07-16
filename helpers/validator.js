const carsModel = require('../models/carsModel');

module.exports = {
  validateId: async (req, res, next) => {
    try {
      const { id } = req.params;

      const car = await carsModel.get(id);
      if(car[0] && car[0].make) {
        req.car = car[0];
        return next();
      }
      res.status(400).json({ message: 'Invalid car id' });
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
};
