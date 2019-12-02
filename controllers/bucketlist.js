const Bucketlist = require('../database/models/').Bucketlist,
    Listitem = require('../database/models/').Listitem,
    moment = require('moment');

module.exports.create = async (req, res) => {

    try {
        const name = req.body.name,
            createdBy = req.decoded.name;

        await Bucketlist.create({
            name: name,
            date_created: moment().format(),
            date_modified: moment().format(),
            created_by: createdBy
        });

        return res.status(200).send({
            status: true,
            message: 'Bucket list created successfully'
        });

    }catch (e) {
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};

module.exports.get = async (req, res) => {
    try {

        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        let query;

        if (page && page > 0 && limit && limit > 0){

            const offset = (page - 1) * limit;
            query = {
                include: [{
                    model: Listitem,
                    as: 'items'
                }],
                offset: offset,
                limit: limit
            };
        } else{
            query = {
                include: [{
                    model: Listitem,
                    as: 'items'
                }]
            };
        }
        const bucketLists = await Bucketlist.findAll(query);

        return res.status(200).send({
            status: true,
            data: bucketLists
        });

    }catch (e) {
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};

module.exports.getById = async (req, res) => {
    try {
        const id = req.params.id;

        const bucketList = await Bucketlist.findOne({
            where: {id: id},
            include: [{
                model: Listitem,
                as: 'items'
            }]
        });

        return res.status(200).send({
            status: true,
            data: bucketList
        });

    }catch (e) {
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};

module.exports.update = async (req, res) => {
    try {
        const id = req.params.id,
         createdBy = req.decoded.name,
         name = req.body.name;

        const updated = await Bucketlist.update(
            {
                name: name,
                date_modified: moment().format(),
                created_by: createdBy
            },
            {
                where: {
                    id: id
                }
            }
        );

       if (updated[0])
           return res.status(200).send({
               status: true,
               message: 'Successfully updated'
           });

        return res.status(400).send({
            status: false,
            message: 'update was not successful'
        });

    }catch (e) {
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};

module.exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        const deleted = await Bucketlist.destroy({
            where:{
                id: id
            }
        });

        if (deleted)
            return res.status(200).send({
                status: true,
                message: 'Successfully deleted'
            });

        return res.status(400).send({
            status: false,
            message: 'deletion was not successful'
        });
        
    }catch (e) {
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};