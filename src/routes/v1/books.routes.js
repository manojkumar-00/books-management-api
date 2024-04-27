const express = require('express');
const { PingCheck, BooksController } = require('../../controllers');



const booksRouter = express.Router();

/**
 * GET Request -> /api/v1/books/ping
 */

booksRouter.get('/ping', PingCheck('Books Controller is live...'));


/**
 * POST Request -> /api/v1/books
 * Request Body -> { title:'Book', publicationYear:'2018', genere: '' }
 */

booksRouter.post('/', BooksController.addBook);


/**
 * Get Request : /api/v1/books/
 * Request Body -> {}
 */

booksRouter.get('/', BooksController.getAllBooks);


/**
 * Get Request : /api/v1/books/id
 * Request Body -> {}
 */

booksRouter.get('/:id', BooksController.getBook);

/**
 * PATCH Request : /api/v1/books/:id/
 * Request Body -> { title:'Book', publicationYear:'2018', genere: '' }
 */

booksRouter.patch('/:id', BooksController.updateBook);

/**
 * DELETE Request : /api/v1/books/:id/
 * Request Body -> {}
 */

booksRouter.delete('/:id', BooksController.deleteBook);


module.exports = booksRouter;