var mongoose = require('mongoose'),
    chalk = require('chalk'),
    users = require('./assets/seed-db/users'),
    User = mongoose.model('User');

function seedUsers() {
    return User.create(users);

    return new Promise((resolve, reject) => {
        User.create(users, (err) => {
            if (err) {
                console.log(chalk.red(    `(x) Error occurred when seed users data`));
                reject(err)
            } else resolve();
        })
    })
}

function seedOthers() {
    return new Promise((resolve, reject) => {
        // Seed others data here...
        resolve();
    })
}

module.exports.seed  = () => {
    return new Promise((resolve, reject) => {

        User.remove({})
            .then(User.create(users))
            .then(seedOthers)
            .then(() =>{
                console.info(chalk.yellow(`    (v) Seed database is completed`));
                resolve();
            })
            .catch((err) => {
                reject(err);
            });
    });
};
