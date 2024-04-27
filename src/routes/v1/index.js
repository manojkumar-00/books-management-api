const express = require('express');

const booksRouter = require('./books.routes');
const userRouter = require('./user.routes');


const v1Router = express.Router();

/**
 * any request starting with /books -> will route to booksRouter
 */

v1Router.use('/books', booksRouter);

/**
 * any request starting with /user -> will route to userRouter 
 */
v1Router.use('/user', userRouter);


module.exports = v1Router;