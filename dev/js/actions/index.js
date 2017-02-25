export const isLoggedIn = (user) => {
    return {
        type: 'USER_LOGGEDIN',
        payload: user
    }
};
