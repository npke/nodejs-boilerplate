var chalk = require('chalk');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.render('404');
    });

    app.use((err, req, res, next) => {
        console.log(chalk.red(err.stack));
        res.render('500');
    });
};

