'use strict';

const { Enums } = require('../utils/common');
const { ADMIN, CUSTOMER } = Enums.USER_ROLES;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addConstraint('Roles', {
      name: 'CK_Roles_name',
      fields: ['name'],
      type: 'check',
      where: {
        name: [ADMIN, CUSTOMER]
      }
    });


  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint('CK_Roles_name');
  }
};
