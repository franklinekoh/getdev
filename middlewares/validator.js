const { check } = require('express-validator'),
    Bucketlist = require('../database/models/').Bucketlist,
    ListItem = require('../database/models').Listitem;

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
            check('id').custom(async (value) => {
                try {
                    const bucketList = await Bucketlist.count({where: {'id': value}});

                    if (bucketList === 0){
                        return Promise.reject('id is invalid');
                    }

                }catch (e) {
                    return Promise.reject(e.toString());
                }
            })
        ],
        update: [
            check('id').custom(async (value) => {
                try {
                    const bucketList = await Bucketlist.count({where: {'id': value}});

                    if (bucketList === 0){
                        return Promise.reject('id is invalid');
                    }

                }catch (e) {
                    return Promise.reject(e.toString());
                }
            }),
            check('item_id').custom(async (value) => {
                try {
                    const bucketList = await ListItem.count({where: {'id': value}});

                    console.log(bucketList);
                    if (bucketList === 0){
                        return Promise.reject('item_id is invalid');
                    }

                }catch (e) {
                    return Promise.reject(e.toString());
                }
            }),
            check('done', 'done field must be true or false').isBoolean()

        ]
    }

};