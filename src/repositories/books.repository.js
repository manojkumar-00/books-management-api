const CurdRepository = require('./crud.repository');
const { Book, Author } = require('../models');
const { AppError } = require('../errors');
const { StatusCodes } = require('http-status-codes');



class BooksRepository extends CurdRepository {

    constructor() {
        super(Book);
    }

    async getAll(filter) {
        const books = await this.model.findAll(filter);

        if (books.length === 0) {
            throw new AppError(StatusCodes.NOT_FOUND);
        }
        return books;
    }

}

module.exports = BooksRepository;