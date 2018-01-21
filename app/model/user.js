/**
 * Created by Home on 1/8/2018.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');


//regexr.com for match arguments

var UserSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, lowercase: true, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, lowercases: true, unique: true}
})

UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, null, null, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

/*
UserSchema.plugin(titlize, {
    paths: ['name'], // Array of paths
});
*/

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('user', UserSchema);
