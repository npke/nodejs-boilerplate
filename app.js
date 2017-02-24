var app = require('./server/server'),
    chalk = require('chalk');

app.mongodb.connect()
    .then(app.mongodb.loadModels)
    .then(app.seedDb.seed)
    .then(app.express.init)
    .then((server) => {
        server.listen(app.config.port, () => {
            console.log(chalk.bold.green(`Hooray! ${app.config.app.name} running at ${app.config.port}!`));
        });
    })
    .catch((err) => {
        console.info('Details:');
        console.log(err.stack);
    });
