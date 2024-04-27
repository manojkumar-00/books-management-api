'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Books', [
      {
        title: `Harry Potter and the Philosopher's Stone`,
        publicationYear: 1997,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Game of Thrones',
        publicationYear: 1996,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Lord of the Rings',
        publicationYear: 1954,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Murder on the Orient Express',
        publicationYear: 1934,
        genere: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Hobbit',
        publicationYear: 1937,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        publicationYear: 1998,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Clash of Kings',
        publicationYear: 1998,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'And Then There Were None',
        publicationYear: 1939,
        genere: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Fellowship of the Ring',
        publicationYear: 1954,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Harry Potter and the Prisoner of Azkaban',
        publicationYear: 1999,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});

  }
};
