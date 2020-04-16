const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 5000;

//set our port
app.set('port', port);

//init our server with app.js
const server = http.createServer(app);

//start this bad boy up!
server.listen(port);
