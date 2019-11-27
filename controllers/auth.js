const jwt = require('jsonwebtoken'),
    User = require('../database/models/').User,
    config= require('../config'),
    redis = require('redis'),
    bcrypt = require('bcryptjs');

module.exports.login = async (req, res) => {
    try {

        const email = req.body.email,
            name = req.body.name,
            password = req.body.password;

        const user = await User.findOne({where: {email: email}});
        let status, token;

        if (!user) {
             status = false;
        }else{
            const passwordHash = user.dataValues.password;

            if (!bcrypt.compareSync(password, passwordHash)){
                status = false;
            }else{
                status = true;
                const payload = {
                        email: email,
                        name: name,
                        expiration: config.auth.exp
                    },
                    options = { expiresIn: config.auth.exp, issuer: 'https://github.com/franklinekoh' },
                    secret = config.secret;
                    token = jwt.sign(payload, secret, options);
            }
        }

        return res.status(status?200:401)
            .send({
               status: status,
                'message': status?'login successful':'email/password incorrect',
               data: {
                   token: token
               }
            });


    }catch (e) {
        console.log(e);
        return res.status(500).send({
            status: false,
            message: e
        });
    }
};

module.exports.logout = async (req, res) => {

    console.log('working');
    try {
        const client = redis.createClient();
        const token = req.body.token;

        await client.exists(token, (error, result) =>{
            if (!result){
                client.set(token, token, redis.print);
            }

            return res.status(200).send({
                status: true,
                message: 'logout successful'
            });
        });

    }catch (e) {
        return res.status(500).send({
            status: false,
            message: e
        });
    }

};
