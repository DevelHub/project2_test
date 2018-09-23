import {combineReducers, createStore, applyMiddleware} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {sidebarReducer, themeReducer, productReducer} from '../redux/reducers/index';
import {users} from '../redux/reducers/loginReducer';
import thunkMiddleware from 'redux-thunk';
import {authentication} from '../redux/reducers/authenticationReducer';
import {registration} from '../redux/reducers/registrationReducer';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  product: productReducer,
  users,
  authentication,
  registration
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware));

export default store;
