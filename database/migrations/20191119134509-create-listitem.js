'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listitems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bucketlist_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date_created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_modified: {
        allowNull: false,
        type: Sequelize.DATE
      },
      done: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    }).then(() => queryInterface.addConstraint(
        'Listitems',
        ['bucketlist_id'],
        {
          type: 'foreign key',
          name: 'bucketlist_id_fk',
          references: {
            table: 'BucketLists',
            field: 'id'
          }
        }
        )
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listitems');
  }
};