/* eslint-disable no-plusplus */
const { makeExecutableSchema } = require('graphql-tools');

let callTimes = 0;

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
    getAuthor() {
      console.log(++callTimes);
      return {
        id: 1,
        name: 'KP',
      };
    },

    getPostsByTitle() {
      console.log(++callTimes);
      return {
        id: 2,
        title: 'GraphQL is fun!',
        text: 'GraphQL Taiwan is good!',
      };
    },
  },

  Author: {
    posts(author) {
      console.log(++callTimes);
      return [
        {
          id: 3,
          title: `${author.name} blog`,
          text: 'GraphQL Tawian is good!',
        },
        {
          id: 4,
          title: `${author.name} loves GraphQL`,
          text: 'GraphQL Tawian is awesome!',
        },
      ];
    },
  },

  Post: {
    author(post) {
      console.log(++callTimes);
      return {
        id: 5,
        name: post.id,
      };
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
