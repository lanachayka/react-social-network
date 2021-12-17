import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return { ...state, initialized: true }
        }
        default: return state
    }
}

export const initializingSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    dispatch(getAuth()).then(() => dispatch(initializingSuccess()));
}

export default appReducer;