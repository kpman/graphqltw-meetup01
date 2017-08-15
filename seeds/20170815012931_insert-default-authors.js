exports.seed = function(knex) {
  return knex('authors').insert([
    {
      name: 'chentsulin',
    },
    {
      name: 'cph',
    },
    {
      name: 'kpman',
    },
  ]);
};
