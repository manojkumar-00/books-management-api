const { StatusCodes } = require('http-status-codes');
const { AppError } = require("../errors");

function validateCreateRequest(req, res, next) {

    if (!req.body.title || !req.body.publicationYear || !req.body.genere || !author) {

        let details = new Array();

        if (!req.body.title) {
            details.push("Title is not found in incomming request in correct form")
        }

        if (!req.body.modelNumber) {
            details.push("Model Number is not found in incomming request in correct form")
        }

        if (!req.body.capacity) {
            details.push("Airplane Capacity is not found in incomming request in correct form")
        }

        throw new AppError(StatusCodes.BAD_REQUEST, "Please enter valid details", details);
    }


    next();
}

module.exports = {
    validateCreateRequest
};