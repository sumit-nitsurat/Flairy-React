var user = require('../models/user/user-login');
exports.login = function(req,res){
    var user_cred = new user({
        name: req.body.response.name,
        email: req.body.response.email,
        facebook: {
            data: req.body.response,
            active: req.body.fbLogin
        }     
    });
    
    user_cred.save(function(err, data){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"data" : data};
            }
            res.json(response);
        });
};