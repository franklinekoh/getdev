'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    date_created: DataTypes.DATE,
    date_modified: DataTypes.DATE
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};