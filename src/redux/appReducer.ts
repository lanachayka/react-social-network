import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

const initialState = {
    initialized: false,
};

type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: InitializingSuccessActionType):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return { ...state, initialized: true }
        }
        default: return state
    }
}

type InitializingSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializingSuccess = (): InitializingSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuth()).then(() => dispatch(initializingSuccess()));
}

export default appReducer;