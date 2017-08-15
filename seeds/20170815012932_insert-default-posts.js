exports.seed = function(knex) {
  return knex('posts').insert([
    {
      author_id: 1,
      title: 'chentsulin is awesome!',
      text: 'GraphQLTW is awesome!',
    },
    {
      author_id: 2,
      title: 'CPH is awesome!',
      text: 'GraphQLTW is awesome!',
    },
    {
      author_id: 3,
      title: 'kpman is awesome!',
      text: 'GraphQLTW is awesome!',
    },
    {
      author_id: 3,
      title: 'kpman is awesome again!',
      text: 'GraphQLTW is awesome!',
    },
  ]);
};
