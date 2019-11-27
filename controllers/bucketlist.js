const Bucketlist = require('../database/models/').Bucketlist;

module.exports.create = async (req, res) => {

    console.log('yes');
    try {

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