var contactController = require('../controllers/test-controller');
var userController = require('../controllers/user-controller');
module.exports = function(app,passportConf){

    /**
     * Front end routes
     */
    app.get('/test', contactController.test);
    app.post('/login', userController.login);
}