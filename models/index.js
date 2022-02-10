const User = require('./User');
const Collections = require('./Collections.js');

User.hasMany(Collections, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Collections.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Collections };
