const express = require('express'),
    router = express.Router(),
    bucketListController = require('../controllers/bucketlist'),
    validatorMsg = require('../middlewares/validator.message'),
    auth = require('../middlewares/auth').validateToken,
    validator = require('../middlewares/validator');

router.post('/', [auth, validator.bucketList.create, validatorMsg], bucketListController.create)
    .get('/', [auth], bucketListController.get)
    .get('/:id', [auth], bucketListController.getById)
    .put('/:id', [auth, validator.bucketList.update, validatorMsg], bucketListController.update)
    .delete('/:id', [auth], bucketListController.delete);

module.exports = router;