const { check } = require('express-validator');

module.exports = validator = {
    auth: {
        login: [
           check('email', 'email field must not be empty').not().isEmpty(),
            check('password', 'password field must not be empty').not().isEmpty()
        ]
    },
    bucketList: {
        create:[
            check('name', 'name field must not be empty').not().isEmpty(),
        ],
        update:[
            check('name', 'name field must not be empty').not().isEmpty()
        ]
    },
    listItem: {
        create: [
            check('name', 'name field must not be empty').not().isEmpty(),
            check('bucket_list_id', 'bucket_list_id field must not be empty').not().isEmpty(),
        ]
    }

};