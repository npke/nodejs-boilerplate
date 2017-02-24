var router = require('express').Router(),
    userController = require('../controllers/users.controller');

router.get('/', userController.createUser);

module.exports = (app) => {
    app.use('/users', router);
};
