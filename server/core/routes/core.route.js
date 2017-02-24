var router = require('express').Router(),
    coreController = require('../controllers/core.controller');

router.get('/', coreController.renderIndex);

module.exports = (app) => {
    app.use('/', router);
};
