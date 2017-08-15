/* eslint-disable no-plusplus */
const { makeExecutableSchema } = require('graphql-tools');
const _debug = require('debug');
const DataLoader = require('dataloader');

const knex = require('../knex');

let queryTimes = 0;
const debug = _debug('demo');

const batchLoadAuthors = ids => {
  debug('batchLoadAuthors', ++queryTimes);
  return knex('authors')
    .whereIn('id', ids)
    .select()
    .then(rows => ids.map(id => rows.find(x => x.id === id)));
};

const batchLoadPostsByAuthor = ids => {
  debug('batchLoadPosts', ++queryTimes);
  return knex('posts')
    .whereIn('author_id', ids)
    .select()
    .then(rows => ids.map(id => rows.filter(x => x.author_id === id)));
};

const loaders = {
  authors: new DataLoader(batchLoadAuthors),
  postsByAuthor: new DataLoader(batchLoadPostsByAuthor),
};

const typeDefs = `
  type Author {
    id: Int
    name: String
    posts: [Post]
  }

  type Post {
    id: Int
    title: String
    text: String
    author: Author
  }

  type Query {
    getAuthor(id: Int): Author
    getPostsByTitle(titleContains: String): [Post]
  }
`;

const resolvers = {
  Query: {
    getAuthor(obj, args) {
      return loaders.authors.load(args.id);
    },

    getPostsByTitle(obj, args) {
      debug('getPostsByTitle', ++queryTimes);
      // use .where only for demo
      return knex('posts').where('title', args.titleContains).first().select();
    },
  },

  Author: {
    posts(author) {
      return loaders.postsByAuthor.load(author.id);
    },
  },

  Post: {
    author(post) {
      return loaders.authors.load(post.author_id);
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
