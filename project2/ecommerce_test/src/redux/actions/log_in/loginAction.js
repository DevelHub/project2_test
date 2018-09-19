import { logInTypes } from './loginTypes';
import { logInRequest } from './loginRequest';
import { alertActions } from './alertAction';
// import { createBrowserHistory } from 'history';
// export const history = createBrowserHistory();

export const logInActions = {
    login,
    logout,
    register,
    getAll,
   
};

function login(username, password, history) {
    return dispatch => {
        dispatch(request({ username }));

        logInRequest.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    dispatch(alertActions.success('login successful'));
                    history.push('/pages/home');
              
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: logInTypes.LOGIN_REQUEST, user } }
    function success(user) { return { type: logInTypes.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: logInTypes.LOGIN_FAILURE, error } }
}

function logout() {
    logInRequest.logout();
    return { type: logInTypes.LOGOUT };
}

function register(user,history) {
    return dispatch => {
        dispatch(request(user));

        logInRequest.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/log_in');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: logInTypes.REGISTER_REQUEST, user } }
    function success(user) { return { type: logInTypes.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: logInTypes.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        logInRequest.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: logInTypes.GETALL_REQUEST } }
    function success(users) { return { type: logInTypes.GETALL_SUCCESS, users } }
    function failure(error) { return { type: logInTypes.GETALL_FAILURE, error } }
}