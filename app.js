const express = require('express');


const http = require('http');
const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
});