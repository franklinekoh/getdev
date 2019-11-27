const express = require('express'),
    router = express.Router(),
    authController = require('../controllers/auth'),
    validatorMsg = require('../middlewares/validator.message'),
    auth = require('../middlewares/auth').validateToken,
    validator = require('../middlewares/validator');

router.post('/login', [validator.auth.login, validatorMsg], authController.login);
router.get('/logout', [auth], authController.logout);

router.get('/test', [auth], authController.test);

module.exports = router;