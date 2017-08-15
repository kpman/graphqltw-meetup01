/* eslint-disable no-plusplus */
const { makeExecutableSchema } = require('graphql-tools');

let callTimes = 0;

const fakeQueryAuthor = args => {
  console.log('fakeQueryAuthor', ++callTimes);
  return Promise.resolve({
    id: args.id,
    name: 'kpman',
  });
};

const fakeQueryPost = args => {
  console.log('fakeQueryPost', ++callTimes);
  return Promise.resolve({
    id: 2,
    title: `GraphQL is ${args.titleContains}!`,
    text: 'GraphQL Taiwan is good!',
  });
};

const fakeQueryPostsByAuthor = author => {
  console.log('fakeQueryPostsByAuthor', ++callTimes);
  return Promise.resolve([
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
  ]);
};

const fakeQueryAuthorByPost = post => {
  console.log('fakeQueryAuthorByPost', ++callTimes);
  return Promise.resolve({
    id: 5,
    name: post.id,
  });
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
      return fakeQueryAuthor(args);
    },

    getPostsByTitle(obj, args) {
      return fakeQueryPost(args);
    },
  },

  Author: {
    posts(author) {
      return fakeQueryPostsByAuthor(author);
    },
  },

  Post: {
    author(post) {
      return fakeQueryAuthorByPost(post);
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
