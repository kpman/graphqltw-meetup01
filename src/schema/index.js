/* eslint-disable no-plusplus */
const { makeExecutableSchema } = require('graphql-tools');
const _debug = require('debug');

const knex = require('../knex');

let queryTimes = 0;
const debug = _debug('demo');

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
      debug('getAuthor', ++queryTimes);
      return knex('authors').where('id', args.id).first().select();
    },

    getPostsByTitle(obj, args) {
      debug('getPostsByTitle', ++queryTimes);
      // use .where only for demo
      return knex('posts').where('title', args.titleContains).first().select();
    },
  },

  Author: {
    posts(author) {
      debug('posts', ++queryTimes);
      return knex('posts').where('author_id', author.id).select();
    },
  },

  Post: {
    author(post) {
      debug('author', ++queryTimes);
      return knex('authors').where('id', post.author_id).first().select();
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
