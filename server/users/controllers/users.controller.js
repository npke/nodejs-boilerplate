var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports.createUser = (req, res) => {

    var user = new User({
        email: 'kenguyen@gmail.com',
        password: '12345678'
    });

    user.save((err, user) => {
        if (err)
            return next(err);

        res.json(user);
    })
};
