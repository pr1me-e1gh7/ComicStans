const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comics extends Model {}

Comics.inti(
    {
      category_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issue_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issue_link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pencilers: {
        type: DataTypes.STRING,
      },
      cover_artists: {
        type: DataTypes.STRING,
      },
      inkers: {
        type: DataTypes.STRING,
      },
      writers: {
        type: DataTypes.STRING,
      },
      editors: {
        type: DataTypes.STRING,
      },
      executive_editor: {
        type: DataTypes.STRING,
      },
      letterers: {
        type: DataTypes.STRING,
      },
      colourists: {
        type: DataTypes.STRING,
      },
      release_date: {
        type: DataTypes.STRING,
      },
      comic_series: {
        type: DataTypes.STRING,
      },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comics',
      }
    );
    
    module.exports = Comics;
