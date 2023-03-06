// // create an api router
const express = require('express');
const apiRouter = express.Router();
const routinesRouter = require('./routines');
//const usersRouter = require('./users');
require('dotenv').config();
// // attach other routers from files in this api directory (users, activities...)
// // export the api router

apiRouter.use(async (req, res, next) => {

});
apiRouter.use('/routines', routinesRouter);
//apiRouter.use('/userRouter', usersRouter);

module.exports = apiRouter;
