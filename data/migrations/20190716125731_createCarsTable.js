
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('cars', table => {
    table.increments();
    table.text('make')
      .notNullable();
    table.text('model')
      .notNullable();
    table.text('vin')
      .notNullable()
      .unique();
    table.decimal('mileage')
      .notNullable();
    table.text('transmission_type');
    table.text('status');
    table.unique(['make', 'model']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
