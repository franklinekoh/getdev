'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listitem = sequelize.define('Listitem', {
    name: DataTypes.STRING,
    date_created: DataTypes.DATE,
    date_modified: DataTypes.DATE,
    done: DataTypes.BOOLEAN
  }, {});
  Listitem.associate = function(models) {
    // associations can be defined here
  };
  return Listitem;
};