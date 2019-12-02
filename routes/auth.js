const express = require('express'),
    router = express.Router(),
    authController = require('../controllers/auth'),
    validatorMsg = require('../middlewares/validator.message'),
    auth = require('../middlewares/auth').validateToken,
    validator = require('../middlewares/validator');

router.post('/login', [validator.auth.login, validatorMsg], authController.login)
    .get('/logout', [auth], authController.logout);


module.exports = router;