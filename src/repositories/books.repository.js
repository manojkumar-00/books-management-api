const CurdRepository = require('./crud.repository');
const { Book, Author } = require('../models');
const { AppError } = require('../errors');
const { StatusCodes } = require('http-status-codes');



class BooksRepository extends CurdRepository {

    constructor() {
        super(Book);
    }

    async getAll(filter) {
        const bookWithAuthors = await this.model.findAll(filter);

        if (bookWithAuthors.length === 0) {
            throw new AppError(StatusCodes.NOT_FOUND);
        }
        return bookWithAuthors;
    }

    async get(id) {
        const bookWithAuthors = await this.model.findByPk(1, {
            attributes: ['id', 'title', 'genere', 'publicationYear'],
            include: {
                model: Author,
                as: 'authors',
                attributes: ['name', 'email'], // Specify the attributes you want to include
                through: { attributes: [] } // Exclude the 'books_authors' join table from the response
            }
        });

        if (!bookWithAuthors) {
            throw new AppError(StatusCodes.NOT_FOUND);
        }
        return bookWithAuthors;
    }

}

module.exports = BooksRepository;