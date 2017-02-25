var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "accessToken": Number,
    "name": String,
    "email": String,
    "facebook": {
        "data": Object,
        "active": false
    }
});

 module.exports = mongoose.model('users', userSchema);