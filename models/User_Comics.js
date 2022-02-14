const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_Comics extends Model {}

User_Comics.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull:true,
            references: {
              model: 'users',
              key: 'id',
              unique:false,
            },
          },
          comic_id: {
            type: DataTypes.INTEGER,
            allowNull:true,
            references: {
              model: 'comics',
              key: 'id',
              unique:false,
            },
          },
      },
      {
          sequelize,
          timestamps:false,
          freezeTableName: true,
          modelName: 'User_Comics',
        }
)

module.exports = User_Comics;