import request from 'superagent';

class UserLogin {  
  static isUserLogin(response, callback) {
       return request.post('/api/login')
            .send({ response, fbLogin: true })
            .set('Accept', 'application/json')
            .end(callback);
  }
}

export default UserLogin;