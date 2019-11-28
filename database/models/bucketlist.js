'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bucketlist = sequelize.define('Bucketlist', {
    name: DataTypes.STRING,
    date_created: DataTypes.DATE,
    date_modified: DataTypes.DATE,
    created_by: DataTypes.STRING
  }, {
    timestamps: false
  });
  Bucketlist.associate = function(models) {
    Bucketlist.hasMany(models.Listitem, {
      foreignKey: 'bucketlist_id',
      as: 'items'
    });
  };
  return Bucketlist;
};