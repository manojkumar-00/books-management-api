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

    await queryInterface.bulkInsert('books_Authors', [
      {
        bookId: 1,
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookId: 2,
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookId: 3,
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookId: 4,
        authorId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookId: 5,
        authorId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookId: 6,
        authorId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookId: 7,
        authorId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookId: 8,
        authorId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookId: 9,
        authorId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookId: 10,
        authorId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('books_Authors', null, {});
  }
};
