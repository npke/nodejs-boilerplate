var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    password: String
});

mongoose.model('User', UserSchema);
