const ListItem = require('../database/models/').Listitem,
    moment = require('moment');

module.exports.create = async (req, res) => {
    try {
        const name = req.body.name;
        const bucketListId = req.params.id;

        await ListItem.create({
            bucketlist_id: bucketListId,
            name: name,
            date_created: moment().format(),
            date_modified: moment().format()
        });

        return res.status(200).send({
            status: true,
            message: 'list item created successfully'
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
            item_id = req.params.item_id,
            done = req.body.done;

        const updated = await ListItem.update(
            {
                done: done,
                date_modified: moment().format(),
            },
            {
                where: {
                    bucketlist_id: id,
                    id: item_id
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

        const id = req.params.id,
            item_id = req.params.item_id,
            done = req.body.done;

        const deleted = await ListItem.destroy(
            {
                where: {
                    bucketlist_id: id,
                    id: item_id
                }
            }
        );

        if (deleted)
            return res.status(200).send({
                status: true,
                message: 'Successfully deleted'
            });

        return res.status(400).send({
            status: false,
            message: 'deletion was not successful'
        });

    } catch (e) {

        return res.status(500).send({
            status: false,
            message: e
        });
    }

};