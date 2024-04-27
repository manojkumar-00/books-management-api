'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Book, { through: 'books_authors', as: 'book' });
    }
  }
  Author.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};