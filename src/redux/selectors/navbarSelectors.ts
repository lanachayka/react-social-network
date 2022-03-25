import { AppStateType } from '../reduxStore';

export const getFriends = (state: AppStateType) => {
    return state.navbar.friends
}
