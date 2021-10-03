import { combineReducers, createStore } from 'redux'
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import findUsersReducer from "./findUsersReducer";

const reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  navbar: navbarReducer,
  findUsers: findUsersReducer,
});

const store = createStore(reducers);

export default store;