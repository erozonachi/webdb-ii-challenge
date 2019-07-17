
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { make: 'Toyota', model: 'Tiny Light', vin: 'WQTEHB-73737-QJDTEBH', mileage: 5500 },
        { make: 'Jaguar', model: 'M-5000L', vin: 'QUWJWH-21736-UWQDAL', mileage: 1000 },
        { make: 'Lexus', model: 'RX350', vin: 'HNAHSN-272839-POLASQ', mileage: 30000 },
        { make: 'Mecedez', model: 'Benz 200', vin: 'QAOPUY-20912765-TWQAJS', mileage: 12000 },
        { make: 'Kia', model: 'K3000', vin: 'YHSH-3839-hjjjd3', mileage: 1000000 },
        { make: 'Toyota', model: 'Camry', vin: 'YEWH-321e9-INMSDH', mileage: 45000 }
      ]);
    });
};
