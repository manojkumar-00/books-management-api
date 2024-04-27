const { StatusCodes } = require('http-status-codes');
const { AppError } = require("../errors");

function validateCreateRequest(req, res, next) {

    if (!req.body.title || !req.body.author || !req.body.publicationYear || !req.body.genere) {

        let details = new Array();

        if (!req.body.title) {
            details.push("title is not found in incomming request in correct form")
        }

        if (!req.body.author) {
            details.push("author is not found in incomming request in correct form")
        }

        if (!req.body.publicationYear) {
            details.push("publicationYear is not found in incomming request in correct form")
        }

        if (!req.body.genere) {
            details.push("genere is not found in incomming request in correct form")
        }

        throw new AppError(StatusCodes.BAD_REQUEST, "Please enter valid details", details);
    }
    next();
}

module.exports = {
    validateCreateRequest
};