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

  validateCar: async (req, res, next) => {
    try {
      const { make, model, vin, mileage, transmission_type, status } = req.body;

      if(!make || make.trim() === '') {
        return res.status(400).json({ message: 'Missing required make field'});
      }
      if(!model || model.trim() === '') {
        return res.status(400).json({ message: 'Missing required model field'});
      }
      if(!vin || vin.trim() === '') {
        return res.status(400).json({ message: 'Missing required vin field'});
      }
      if(!mileage || Number.isNaN(mileage)) {
        return res.status(400).json({ message: 'Missing or invalid required mileage field'});
      }
      if(transmission_type) {
        if(transmission_type.trim() === '') {
          return res.status(400).json({ message: 'Missing required transmission type field'});
        }
      }
      if(status) {
        if(status.trim() === '') {
          return res.status(400).json({ message: 'Missing required status field'});
        }
      }

      next();
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
};
