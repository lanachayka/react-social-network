import { InitialStateType, findUsersReducer, actions } from './../redux/findUsersReducer'

let state: InitialStateType

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: 'user 0', followed: false, status: 'status 0',
                photos: { small: null, large: null }
            },
            {
                id: 1, name: 'user 1', followed: false, status: 'status 1',
                photos: { small: null, large: null }
            },
            {
                id: 2, name: 'user 2', followed: true, status: 'status 2',
                photos: { small: null, large: null }
            },
            {
                id: 3, name: 'user 3', followed: true, status: 'status 3',
                photos: { small: null, large: null }
            }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('follow success', () => {
    const newState = findUsersReducer(state, actions.followSuccess(1))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow success', () => {
    const newState = findUsersReducer(state, actions.unfollowSuccess(3))
    expect(newState.users[3].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
})
