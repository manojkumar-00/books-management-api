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
        author: 'J.K. Rowling',
        publicationYear: 1997,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Game of Thrones',
        author: 'George R.R. Martin',
        publicationYear: 1996,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        publicationYear: 1954,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Murder on the Orient Express',
        author: 'Agatha Christie',
        publicationYear: 1934,
        genere: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Hobbit',
        author: 'Arthur Conan Doyle',
        publicationYear: 1937,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'Isaac Asimov',
        publicationYear: 1998,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Clash of Kings',
        author: 'Ray Bradbury',
        publicationYear: 1998,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'And Then There Were None',
        author: 'H.G. Wells',
        publicationYear: 1939,
        genere: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Fellowship of the Ring',
        author: 'Stephen King',
        publicationYear: 1954,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'Margaret Atwood',
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
