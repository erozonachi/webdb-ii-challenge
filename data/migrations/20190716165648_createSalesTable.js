
exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments();
    table.text('notes')
      .notNullable();
    table.decimal('amount')
      .notNullable();
    table.timestamps(true, true);

    table.integer('car_id')
      .unsigned();
    table.foreign('car_id')
      .references('cars.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
