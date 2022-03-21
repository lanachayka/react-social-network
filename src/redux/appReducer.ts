import { InferActionsTypes } from './reduxStore';
import { getAuth } from './authReducer';

const initialState = {
    initialized: false,
};

const actions = {
    initializingSuccess: () => ({ type: 'app/INITIALIZED_SUCCESS' } as const)
}

type InitialStateType = typeof initialState;

type ActionsTypes =  InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS': {
            return { ...state, initialized: true }
        }
        default: return state
    }
}

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuth()).then(() => dispatch(actions.initializingSuccess()));
}

export default appReducer;