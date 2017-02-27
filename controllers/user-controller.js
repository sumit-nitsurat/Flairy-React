var user = require('../models/user/user-login');
exports.login = function(req,res){
    let response = req.body.response;
    var user_cred = new user({
        name: response.name,
        email: response.email,
        profile_pic: response.picture.data.url,
        userType: response.userType,
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