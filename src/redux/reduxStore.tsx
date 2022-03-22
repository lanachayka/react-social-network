import { Action, applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from './authReducer';
import appReducer from './appReducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  navbar: navbarReducer,
  findUsers: findUsersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends {[keys: string] : (...args: any[]) => infer U} ? U : never

export type ThunkType<A extends Action, R=Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;