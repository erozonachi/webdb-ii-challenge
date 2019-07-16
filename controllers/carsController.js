const carsModel = require('../models/carsModel');

module.exports = {
  create: async (req, res) => {
    try {
      const result = await carsModel.insert(req.body);
      res.status(201).json(result[0]);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },

  read: async (req, res) => {
    try {
      if(req.car) {
        return res.status(200).json(req.car);
      }
      const cars = await carsModel.get();

      res.status(200).json(cars);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },

  update: async (req, res) => {
    try {
      const result = await carsModel.update(req.car.id, req.body);
      res.status(200).json(result[0]);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
};
