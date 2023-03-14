// // create an api router
const express = require('express');
const apiRouter = express.Router();
require('dotenv').config();


// const userRouter = require('./users');
// apiRouter.use("/users", userRouter);
// // attach other routers from files in this api directory (users, activities...)
// // export the api router

apiRouter.get('/health', (req, res) => {
    res.send("Up and running!")
});

// apiRouter.get('/', async (req, res) => {
//     console.log('/ route requested')
//     res.send("hello world")
// })
//apiRouter.use('/routines', routinesRouter);
//apiRouter.use('/userRouter', usersRouter);


apiRouter.use((error, req, res, next) => {
    res.send(error);
});

module.exports = apiRouter;
