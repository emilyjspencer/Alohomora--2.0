const express = require('express');

const router = require('./router.js');

const http = require('http');
const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);




app.use(router);

server.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
});