import { logInTypes } from '../actions/log_in/loginTypes';

let user = JSON.parse((localStorage.getItem('user')));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case logInTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case logInTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case logInTypes.LOGIN_FAILURE:
      return {};
    case logInTypes.LOGOUT:
      return {};
    default:
      return state
  }
}