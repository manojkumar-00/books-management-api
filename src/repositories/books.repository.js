const CurdRepository = require('./crud.repository');
const { Book } = require('../models');


class BooksRepository extends CurdRepository {

    constructor() {
        super(Book);
    }

    async getAll(filter) {
        const response = await Flight.Book(filter);
        return response;
    }

}

module.exports = BooksRepository;