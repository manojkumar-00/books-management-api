const { Author } = require('../../models');
const { Op } = require('sequelize');

const generateCustomFilter = (query) => {

    let filterOptions = {
        attributes: ['id', 'title', 'genere', 'publicationYear'],
        include: [
            {
                model: Author,
                as: "authors",
                attributes: ['id', 'name', 'email', 'bio'],
                required: true,
                through: { attributes: [] },
            }
        ],
        where: {}
    };

    if (query?.author) {
        if (query.author.length > 0) {
            filterOptions.include[0].where = { name: query.author };
        }
    }

    if (query?.year) {
        filterOptions.where.publicationYear = {
            [Op.eq]: query.year
        };
    }

    if (query?.sort) {
        let sortingParams = [];

        const sortingCriteria = query.sort.split(',');
        sortingCriteria.forEach(elem => {
            let [colName, method] = elem.split('_');

            if (colName === 'year') {
                colName = 'publicationYear';
            }
            sortingParams.push([colName, method]);
        });

        filterOptions.order = sortingParams.map(param => {
            return [param[0], param[1].toUpperCase()];
        });
    }

    console.log(filterOptions)
    return filterOptions;
};

module.exports = {
    generateCustomFilter
};
