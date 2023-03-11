// create the express server here
const PORT = 3000;
const express = require("express");
const morgan = require('morgan');

const server = express();
const apiRouter = require("./api");
const { client } = require("./db/client");

client.connect();
server.use(morgan('dev'));
server.use('/api', apiRouter);

server.get('/', async (req, res) => {
    console.log('/ route requested')
    res.send("hello world")
})

server.listen(PORT, () => {
    console.log("The server is up on port", PORT);
});
