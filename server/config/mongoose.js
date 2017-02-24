var mongoose = require('mongoose'),
    chalk = require('chalk'),
    config = require('./env/development');

mongoose.Promise = global.Promise;

module.exports.loadModels = () => {
    return new Promise((resolve, reject) => {
        require('../users/models/users.model');

        console.info(chalk.yellow(`    (v) Models are loaded and ready to use`));
        resolve();
    })
};

module.exports.connect = () => {
    return new Promise((resolve, reject) => {
        console.log(chalk.bold.blue('DATABASE:'))

        mongoose.connect(config.db.uri, config.db.options, (err) => {
            if (err) {
                console.error(chalk.bold.red(`    (✖) Could not connect to ${config.db.uri}`));
                reject(err);
            } else {
                console.info(chalk.yellow(`    (v) Connected to ${config.db.uri}`));
                resolve();
            }
        })
    })
};

module.exports.disconnect = () => {
    mongoose.disconnect((err) => {
        if (err)
            console.error(chalk.bold.red(`Error occurred when disconnect from ${config.db.uri}`));
        else console.info(chalk.yellow(`Disconnected from ${config.db.uri}`));
    })
};
