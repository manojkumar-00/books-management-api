
const { BooksService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse } = require('../utils/common/');
const { NotImplementedError, AppError } = require('../errors');
const BooksRepository = require('../repositories/books.repository');


/**
 * POST Request /api/v1/books
 * 
 * Request Body -> { title:'Book', publicationYear:'2018', genere: '' }
 */
async function addBook(req, res, next) {

    try {
        throw new NotImplementedError('addBook');
    }
    catch (error) {
        next(error);
    }

}



/**
 * Get Request : /api/v1/books/
 * 
 * Request Body -> {}
 */

async function getAllBooks(req, res, next) {

    try {
        const books = await BooksService.getAllBooks(req.query);

        SuccessResponse.data = books;
        SuccessResponse.message = "Successfully fetched book";
        SuccessResponse.statusCode = StatusCodes.OK;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);
    }
    catch (error) {
        next(error);
    }
}


/**
 * Get Request : /api/v1/books/id
 * 
 * Request Body -> {}
 */

async function getBook(req, res, next) {

    try {
        const book = await BooksService.getBook(req.params.id);

        SuccessResponse.data = book;
        SuccessResponse.message = "Successfully fetched book";
        SuccessResponse.statusCode = StatusCodes.OK;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);
    }
    catch (error) {
        next(error);
    }
}

/**
 * PATCH Request : /api/v1/books/:id/
 * 
 * Request Body -> { title:'Book', publicationYear:'2018', genere: '' }
 */

async function updateBook(req, res, next) {

    try {

        const book = await BooksService.updateBook(req.params.id, {
            title: req.body.title,
            publicationYear: req.body.publicationYear,
            genere: req.body.genere
        });

        SuccessResponse.data = book;
        SuccessResponse.message = "Successfully updated book";
        SuccessResponse.statusCode = StatusCodes.OK;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

    }
    catch (error) {
        next(error);
    }
}

/**
 * DELETE Request : /api/v1/books/:id/
 * 
 * Request Body -> { title:'Book', publicationYear:'2018', genere: '' }
 */

async function deleteBook(req, res, next) {

    try {
        const book = await BooksService.destroyBook(req.params.id);
        SuccessResponse.data = [];
        SuccessResponse.message = "Successfully deleted book";
        SuccessResponse.statusCode = StatusCodes.OK;

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);
    }
    catch (error) {
        next(error);
    }
}


module.exports = {
    addBook,
    getAllBooks,
    getBook,
    updateBook,
    deleteBook
}