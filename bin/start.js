const server = require('../src/server');

// require('dotenv').config();

server.listen(8080, () => {
  console.log('server is running on http://localhost:8080');
});
