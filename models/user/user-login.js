var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "accessToken": Number,
    "name": String,
    "email": String,
    "profile_pic": String,
    "userType": String,
    "facebook": {
        "data": Object,
        "active": Boolean
    }
});

 module.exports = mongoose.model('users', userSchema);