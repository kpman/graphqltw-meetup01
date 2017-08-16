// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './mydb.sqlite',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.PROD_DATABASE_HOST,
      database: process.env.PROD_DATABASE,
      user: process.env.PROD_DATABASE_USER,
      password: process.env.PROD_DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 20,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'understood',
      user: 'chatbot',
      password: 'chatbot',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
