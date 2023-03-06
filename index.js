// create the express server here
const PORT = 3000;
const express = require("express");
const morgan = require('morgan');
const server = express();
const apiRouter = require("./api");
require("dotenv").config();
const { client } = require("./db");

server.use(morgan('dev'));

server.use("/api", apiRouter);

server.listen(PORT, () => {
    console.log("The server is up on port", PORT);
});
