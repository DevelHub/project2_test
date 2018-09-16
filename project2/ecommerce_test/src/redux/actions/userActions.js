import { userType } from './userType';
import { userService } from '../_services';
// import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userType.LOGIN_REQUEST, user } }
    function success(user) { return { type: userType.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userType.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userType.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userType.REGISTER_REQUEST, user } }
    function success(user) { return { type: userType.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userType.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userType.GETALL_REQUEST } }
    function success(users) { return { type: userType.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userType.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userType.DELETE_REQUEST, id } }
    function success(id) { return { type: userType.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userType.DELETE_FAILURE, id, error } }
}