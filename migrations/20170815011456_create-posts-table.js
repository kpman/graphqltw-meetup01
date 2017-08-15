exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments();
    table.string('title').notNullable();
    table.string('text').notNullable();
    table.integer('author_id').unsigned().notNullable();
    table.foreign('author_id').references('authors.id');
    table.timestamps(false, true); // [useTimestamps], [defaultToNow]
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
