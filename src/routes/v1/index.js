const express = require('express');
const booksRouter = require('./books.routes');


const v1Router = express.Router();

/**
 * any request starting with /books -> will route to v1 router
 */

v1Router.use('/books', booksRouter);

module.exports = v1Router;