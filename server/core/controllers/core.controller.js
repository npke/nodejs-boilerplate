var config = require('../../config/env/development');

module.exports.renderIndex = (req, res, next) => {
    res.render('index', {pageTitle: config.app.title});
};
