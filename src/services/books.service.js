const { BooksRepository } = require('../repositories');
const { AppError, InternalServerError } = require('../errors/');
const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');


let booksRepository = new BooksRepository();

async function createBook(data) {

    try {

        const book = await booksRepository.create(data);
        return book;

    } catch (error) {

        if (error.name == 'SequelizeValidationError') {

            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            Logger.error({ message: "Something went wrong doing validation", error: error });
            throw new AppError(StatusCodes.BAD_REQUEST, "Something went wrong doing validation", explanation);
        }

        throw new InternalServerError("Cannot create a new Book Object");
    }
}


async function getAllBooks(filter) {

    try {
        const books = await booksRepository.getAll();
        return books;

    } catch (error) {

        Logger.error({ message: "Something went wrong fetching books", error: error });
        throw new InternalServerError("Cannot get the books");
    }
}

async function getBook(id) {

    try {

        const book = await booksRepository.get(id);
        return book;

    } catch (error) {

        Logger.error({ message: "Something went wrong fetching book", error: error });
        if (error.statusCode == StatusCodes.NOT_FOUND) {

            throw new AppError(error.statusCode, "Cannot fetched the book", ["Resource requested is not present"]);
        }

        throw new InternalServerError("Cannot get the book");
    }
}

async function destroyBook(id) {

    try {

        const response = await booksRepository.destroy(id);
        return response;

    } catch (error) {
        Logger.error({ message: "Something went wrong deleting book", error: error });

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(error.statusCode, "Cannot delete the book", ["Resource requested to delete is not present"]);
        }

        throw new InternalServerError("Cannot delete the book");
    }
}

async function updateBook(key, data) {

    try {

        const book = await booksRepository.update(key, data);
        return book;

    } catch (error) {

        Logger.error({ message: "Something went wrong updating book", error: error });

        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError(error.statusCode, "Cannot update the book", ["Resource requested to update is not present"]);
        }

        throw new InternalServerError("Cannot update the book");
    }
}

module.exports = {
    createBook,
    getAllBooks,
    getBook,
    updateBook,
    destroyBook
};