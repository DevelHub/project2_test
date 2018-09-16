import {combineReducers, createStore} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {sidebarReducer, themeReducer, itemsByTypeReducer} from '../redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  itemsByType: itemsByTypeReducer
});

const store = createStore(reducer);

export default store;
