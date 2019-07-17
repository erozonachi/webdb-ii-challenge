const express = require('express');
const carsRoute = require('./routes/carsRoute');

const PORT = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use('/api/cars', carsRoute);

server.listen(PORT, () => {
  console.log(`Server running on port:- ${PORT}...`);
});
