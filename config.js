require('dotenv').config();

module.exports = {
    port: process.env.APP_PORT || 500,
    secret: process.env.APP_KEY,
    auth: {
        exp: process.env.AUTH_EXP || '1h'
    }
};