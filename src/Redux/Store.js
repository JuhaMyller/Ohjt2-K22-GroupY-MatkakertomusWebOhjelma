import { combineReducers, createStore, applyMiddleware } from 'redux';
import matkakohdeReducer from './Reducers/matkakohdeReducer';
import tarinatReducer from './Reducers/tarinatReducer';
import authRecucer from './Reducers/authReducer';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
  tarinat: tarinatReducer,
  matkakohteet: matkakohdeReducer,
  auth: authRecucer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
