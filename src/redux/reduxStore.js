import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from './authReducer';
import appReducer from './appReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  navbar: navbarReducer,
  findUsers: findUsersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;