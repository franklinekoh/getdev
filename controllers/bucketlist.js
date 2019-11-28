const Bucketlist = require('../database/models/').Bucketlist,
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
        console.log(e);
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};

module.exports.get = async (req, res) => {
    try {

    }catch (e) {
        console.log(e);
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};

module.exports.getById = async (req, res) => {
    try {

    }catch (e) {
        console.log(e);
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};

module.exports.update = async (req, res) => {
    try {

    }catch (e) {
        console.log(e);
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};

module.exports.delete = async (req, res) => {
    try {

    }catch (e) {
        console.log(e);
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};