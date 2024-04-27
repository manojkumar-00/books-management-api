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
        authorName: 'J.K. Rowling',
        publicationYear: 1997,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Game of Thrones',
        authorName: 'George R.R. Martin',
        publicationYear: 1996,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Lord of the Rings',
        authorName: 'J.R.R. Tolkien',
        publicationYear: 1954,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Murder on the Orient Express',
        authorName: 'Agatha Christie',
        publicationYear: 1934,
        genere: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Hobbit',
        authorName: 'Arthur Conan Doyle',
        publicationYear: 1937,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        authorName: 'Isaac Asimov',
        publicationYear: 1998,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Clash of Kings',
        authorName: 'Ray Bradbury',
        publicationYear: 1998,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'And Then There Were None',
        authorName: 'H.G. Wells',
        publicationYear: 1939,
        genere: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Fellowship of the Ring',
        authorName: 'Stephen King',
        publicationYear: 1954,
        genere: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Harry Potter and the Prisoner of Azkaban',
        authorName: 'Margaret Atwood',
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
