/**
 * Created by Home on 1/8/2018.
 */
var User = require('./model/user');
var jwt = require('jsonwebtoken');
var secret = "harrypotter";

module.exports = function (router) {

    //http://localhost:8000/api.users
    //USER REGISTRATION ROUTE
    router.post('/user', function (req, res) {
        var user = new User();//give id
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        user.name = req.body.name;
        if (!req.body.username || !req.body.password || !req.body.email || !req.body.name) {
            res.json({success: false, message: "Ensure username, email and password were provided"});
        }
        else {
            user.save(function (err) {
                if (err) {
                    if (err.errmsg.indexOf("username") !== -1) {
                        res.json({success: false, message: "username is already taken"});
                    }
                    else if (err.errmsg.indexOf("email") !== -1) {
                        res.json({success: false, message: "email is already taken"});
                    }
                }
                else {
                    console.log('user created successfully')
                    var token = jwt.sign({username: user.username, email: user.email}, secret, {expiresIn: '24h'});
                    res.json({success: true, message: 'successfully user created', token: token});
                }
            });
        }
    });

    //CHECK USERNAME
    router.post('/checkusername', function (req, res) {
        User.findOne({username: req.body.username}).select('username').exec(function (err, user) {
            if (err)throw err;
            if (user) {
                res.json({success: false, message: 'That user name is already taken.'});
            } else {
                res.json({success: true, message: 'Valid username'});
            }

        });
    });

    //CHECK checkemail
    router.post('/checkemail', function (req, res) {
        User.findOne({username: req.body.email}).select('email').exec(function (err, user) {
            if (err)throw err;
            if (user) {
                res.json({success: false, message: 'That email is already taken.'});
            } else {
                res.json({success: true, message: 'Valid email'});
            }
        });
    });

    //USER LOGIN ROUTE
    //http://localhost:port/api/authenticate
    router.post('/authenticate', function (req, res) {
        if (!req.body.password) {
            return res.json({success: false, message: 'No password provided'})
        }
        if (!req.body.username) {
            return res.json({success: false, message: 'No username provided'})
        }
        User.findOne({username: req.body.username}).select('email username password').exec(function (err, user) {
            if (err) throw err;

            if (!user) {
                return res.json({success: false, message: 'Could not authenticate user'});
            }

            if (!user.comparePassword(req.body.password)) {
                res.json({success: false, message: 'Could not authenticate password'});
            } else {
                var token = jwt.sign({username: user.username, email: user.email}, secret, {expiresIn: '24h'});
                res.json({success: true, message: 'User Authenticate', token: token});
            }
        });
    });

    return router;
}
