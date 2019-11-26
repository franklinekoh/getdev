const express = require('express'),
    router = express.Router(),
    authController = require('../controllers/auth'),
    validatorMsg = require('../middlewares/validator.message'),
    validator = require('../middlewares/validator');


router.post('/login', [validator.auth.login, validatorMsg], authController.login);

module.exports = router;