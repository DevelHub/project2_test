import { logInTypes } from './loginTypes';
import { logInRequest } from './loginRequest';
import { alertActions } from './alertAction';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
export const logInActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        logInRequest.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
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

function register(user) {
    return dispatch => {
        dispatch(request(user));

        logInRequest.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
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

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        logInRequest.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: logInTypes.DELETE_REQUEST, id } }
    function success(id) { return { type: logInTypes.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: logInTypes.DELETE_FAILURE, id, error } }
}