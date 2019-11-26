'use strict';
const bcrypt = require('bcryptjs'),
    moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: bcrypt.hashSync('secret', 10),
        date_created: moment().format(),
        date_modified: moment().format()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
