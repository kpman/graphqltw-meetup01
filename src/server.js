const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mount = require('koa-mount');
const graphql = require('koa-graphql');

const schema = require('./schema');

const server = new Koa();

server.use(bodyParser());
server.use(
  mount(
    '/graphql',
    graphql({
      schema,
      graphiql: true,
    })
  )
);

module.exports = server;
