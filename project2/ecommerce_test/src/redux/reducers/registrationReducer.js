import { logInTypes } from '../actions/log_in/loginTypes';

export function registration(state = {}, action) {
  switch (action.type) {
    case logInTypes.REGISTER_REQUEST:
      return { registering: true };
    case logInTypes.REGISTER_SUCCESS:
      return {};
    case logInTypes.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}