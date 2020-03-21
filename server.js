
const http = require('http');
const port = process.env.PORT || 8080;
const app = require('./app');

var server = http.createServer(app);

server.listen(8080);
