'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bucketlist = sequelize.define('Bucketlist', {
    name: DataTypes.STRING,
    date_created: DataTypes.DATE,
    date_modified: DataTypes.DATE,
    created_by: DataTypes.STRING
  }, {});
  Bucketlist.associate = function(models) {
    // associations can be defined here
  };
  return Bucketlist;
};