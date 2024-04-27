const express = require('express');
const { PingCheck } = require('../../controllers');



const booksRouter = express.Router();

/**
 * GET Request
 * /api/v1/books/ping
 */

booksRouter.get(
    '/ping',
    PingCheck('Books Controller is live...')
);


module.exports = booksRouter;