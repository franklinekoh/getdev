/*

Author: Seyi Adedokun
Edited By: Seyi Adedokun
Last Edit: 16/09/2019

 */

const jwt = require('jsonwebtoken'),
    redis = require('redis'),
    config = require('../config');

module.exports = {

    validateToken: async (req, res, next)  => {

        const token = req.body.token || req.headers.token; // Bearer <token>
        const client = redis.createClient();
        let decoded;
        if (token) {
            try {
                 await client.exists(token, function (error, result) {
                     decoded = jwt.verify(token, config.secret);

                    if (error){
                        console.log(error);
                    }
                    if (result){
                        return  res.status(401).send({
                            error: `Authentication error, Invalid token`,
                            status: 401
                        });
                    }else{
                        req.decoded = result;
                        req.body.token = token;
                        next();
                    }

                });

            } catch (err) {
               return res.status(401).send({
                    error: err.toString(),
                    status: 401
                });
            }
        } else {
           return res.status(401).send({
                error: `Authentication error, Token required`,
                status: 401
            });
        }
    }
};
