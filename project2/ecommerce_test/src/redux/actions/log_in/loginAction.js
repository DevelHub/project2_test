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
    registerCustom
   
};

function login(username, password, history) {
    return dispatch => {
        dispatch(request({ username }));

        logInRequest.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    dispatch(alertActions.success('login successful'));
                    
                    
                    if(user[0].role.toLowerCase()==='customer'){
                        history.push('/pages/customer');
                    }
                    else if(user[0].role.toLowerCase()==='company'){
                        history.push('/pages/company');

                    }
                    else{
                        history.push('/pages/home');
                    }
                  
              
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
                    dispatch(alertActions.success('Registration successful'));
                    alert("Register Success");
                    // this.context.history.push('/log_in');
                    // alert("register done")
                    
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
function registerCustom(user){
    return dispatch => {
        dispatch(request(user));

        logInRequest.registerCustom(user)
            .then(
                user => { 
                    dispatch(success());
                    dispatch(alertActions.success('Registration successful'));
                    // history.push('/log_in');
                    
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