'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listitem = sequelize.define('Listitem', {
    name: DataTypes.STRING,
    bucketlist_id: DataTypes.INTEGER,
    date_created: DataTypes.DATE,
    date_modified: DataTypes.DATE,
    done: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  Listitem.associate = function(models) {
    Listitem.hasOne(models.Bucketlist, {
      foreignKey: 'id',
    });
  };
  return Listitem;
};