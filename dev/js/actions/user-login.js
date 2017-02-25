import UserLogin from '../api/user-login';

export function isUserLoggedIn(response, cb) {  
  return function(dispatch) {
    return UserLogin.isUserLogin(response, (err, res) => {
        if(err) {
            return;
        }
        dispatch(isLoggedIn(res.body.data));
        cb(res.body.data);
    });
  };
}

export const isLoggedIn = (user) => {
    return {
        type: 'USER_LOGGEDIN',
        payload: user
    }
};