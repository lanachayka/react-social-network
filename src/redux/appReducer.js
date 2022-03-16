import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";
const SET_GLOBAL_ERROR = "app/SET_GLOBAL_ERROR";

const initialState = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return { ...state, initialized: true }
        }
        case SET_GLOBAL_ERROR: {
            return { ...state, ...action.payload }
        }
        default: return state
    }
}

export const initializingSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const setGlobalError = (globalError) => ({ type: SET_GLOBAL_ERROR, payload: {globalError: globalError} });

export const initializeApp = () => (dispatch) => {
    dispatch(getAuth()).then(() => dispatch(initializingSuccess()));
}

export default appReducer;