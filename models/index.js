const User = require('./User');
const Comics = require('./Comics.js');

User.belongsToMany(Comics, {
  through : 'User_Comics'
});

Comics.belongsToMany(User, {
  through : 'User_Comics'
});

module.exports = { User, Comics };
