const express = require('express');
const validator = require('../helpers/validator');
const controller = require('../controllers/carsController');

const app = express.Router();

app.post('/', validator.validateCar, controller.create);
app.get('/', controller.read);
app.get('/:id', validator.validateId, controller.read);
app.put('/:id', validator.validateId, validator.validateCar, controller.update);
app.delete('/:id', validator.validateId, controller.delete);

module.exports = app;
