
const { } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse } = require('../utils/common/');
const { NotImplementedError } = require('../errors');


/**
 * POST Request /api/v1/books
 * 
 * Request Body -> { title:'Book', publicationYear:'2018', genere: '' }
 */
async function addBook(req, res, next) {

    try {
        throw new NotImplementedError(`addBook service is not implemented`);
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
        throw new NotImplementedError(`getAllBooks service is not implemented`);
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
        throw new NotImplementedError(`getBook service is not implemented`);
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
        throw new NotImplementedError(`updateBook service is not implemented`);
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
        throw new NotImplementedError(`deleteBook service is not implemented`);
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