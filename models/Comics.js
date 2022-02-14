const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comics extends Model {}

Comics.init(
    {
      category_title: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      issue_name: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      issue_link: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      pencilers: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      cover_artists: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      inkers: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      writers: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      editors: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      executive_editor: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      letterers: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      colourists: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      release_date: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      comic_series: {
        type: DataTypes.TEXT,
        defaultValue: null,
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
