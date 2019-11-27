function loadApp(){
    const express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        helmet = require('helmet');
        require('dotenv').config();
        /*
        Routes
         */
        const authRoute = require('./routes/auth'),
            bucketListRoute = require('./routes/bucketlist');

    /**
     *Use helmet to secure header
     */
    app.use(helmet());
    /**
     * JSON and urlencoded body parser
     */
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    /**
     * Cross site origin access
     */
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        // specify allowed URLs here
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });

    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/bucketlists', bucketListRoute);

    // Error handling
    // 404
    app.use(function(req, res, next) {
        return res.status(404).send({ message: `Route ${req.url} Not found.` });
    });

// 500 - Any server error
    app.use(function(err, req, res, next) {

        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        return res.status(500).send({ error: err });
    });

    return {'app': app, 'bodyParser': bodyParser};
}

module.exports = loadApp();