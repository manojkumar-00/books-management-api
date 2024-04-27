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

    await queryInterface.bulkInsert('Authors', [
      {
        name: 'J.K. Rowling',
        email: 'jk.rowling@example.com',
        bio: 'British author, best known for the Harry Potter series.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'George R.R. Martin',
        email: 'george.martin@example.com',
        bio: 'American author, best known for the "A Song of Ice and Fire" series.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'J.R.R. Tolkien',
        email: 'tolkien@example.com',
        bio: 'British author, best known for "The Lord of the Rings" series.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Agatha Christie',
        email: 'agatha.christie@example.com',
        bio: 'British author, known for her detective and mystery novels.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Arthur Conan Doyle',
        email: 'doyle@example.com',
        bio: 'British writer, known for creating the fictional detective Sherlock Holmes.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Isaac Asimov',
        email: 'asimov@example.com',
        bio: 'American writer, known for his works of science fiction and popular science.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ray Bradbury',
        email: 'bradbury@example.com',
        bio: 'American author and screenwriter, known for his science fiction and horror works.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'H.G. Wells',
        email: 'wells@example.com',
        bio: 'British writer known for his science fiction novels.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stephen King',
        email: 'stephen.king@example.com',
        bio: 'American author, known for his works in the genres of horror, supernatural fiction, and fantasy.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Margaret Atwood',
        email: 'margaret.atwood@example.com',
        bio: 'Canadian author, known for her works of speculative fiction and dystopia.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Authors', null, {});
  }
};
