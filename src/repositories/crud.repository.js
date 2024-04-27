
const { StatusCodes } = require('http-status-codes');
const { AppError } = require('../errors');


class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {

        const response = await this.model.create(data);
        return response;
    }

    async destroy(data) {

        const response = await this.model.destroy({
            where: {
                id: data
            }
        });

        if (!response) {
            throw new AppError(StatusCodes.NOT_FOUND);
        }

        return response;

    }

    async get(id) {

        const author = await this.model.findByPk(1); // Find an author by primary key (ID)
        console.log(author);
        const books = await author.getBook(); // Get all books associated with the author
        console.log(books);


        if (!response) {
            throw new AppError(StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }


    async update(key, data) {

        const response = await this.model.update(data, {
            where: {
                id: key
            }
        });

        if (!response) {
            throw new AppError(StatusCodes.NOT_FOUND);
        }

        return response;

    }
}

module.exports = CrudRepository;