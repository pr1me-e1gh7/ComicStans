const User = require('./User');
const Comics = require('./Comics.js');
const User_Comics = require('./User_Comics')

User.belongsToMany(Comics, {
  through : {
    model: User_Comics, 
    unique:false,
  }, 
  as: 'saved_comics'
});

Comics.belongsToMany(User, {
  through : {
    model: User_Comics, 
    unique:false,
  },
  as: 'user_collections'
});

module.exports = { User, Comics, User_Comics };
