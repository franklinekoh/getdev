const { check } = require('express-validator');

module.exports = validator = {
    auth: {
        login: [
           check('email', 'Email field must not be empty').not().isEmpty(),
            check('password', 'Password field must not be empty').not().isEmpty()
        ]
    },
    bucketList: {

    }
};