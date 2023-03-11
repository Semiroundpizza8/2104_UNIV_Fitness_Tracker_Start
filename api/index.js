// // create an api router
const express = require('express');
require('dotenv').config();

//const routinesRouter = require('./routines');

const apiRouter = express.Router();
//const usersRouter = require('./users');
// // attach other routers from files in this api directory (users, activities...)
// // export the api router

apiRouter.get('/', async (req, res) => {
    console.log('/ route requested')
    res.send("hello world")
})
//apiRouter.use('/routines', routinesRouter);
//apiRouter.use('/userRouter', usersRouter);

apiRouter.use((error, req, res) => {
    res.send(error);
});
module.exports = apiRouter;
