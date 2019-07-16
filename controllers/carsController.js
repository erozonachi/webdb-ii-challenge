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
};
