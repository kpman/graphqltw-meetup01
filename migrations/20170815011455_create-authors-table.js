exports.up = function(knex) {
  return knex.schema.createTable('authors', table => {
    table.increments();
    table.string('name').notNullable();
    table.timestamps(false, true); // [useTimestamps], [defaultToNow]
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('authors');
};
