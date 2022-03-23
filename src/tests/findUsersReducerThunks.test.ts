import { ResponseType, ResultCodes } from './../api/api';
import { userAPI } from './../api/users-api'
import { actions, follow, unfollow } from './../redux/findUsersReducer'

jest.mock('./../api/users-api')
const userAPIMock = userAPI as jest.Mocked<typeof userAPI>
const result: ResponseType = {
    resultCode: ResultCodes.Succsess,
    messages: [],
    data: {}
}

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userAPIMock.follow.mockClear()
    userAPIMock.unfollow.mockClear()
})

test('succsess follow thunk', async () => {
    // @ts-ignore
    userAPIMock.follow.mockReturnValue(result)

    const thunk = follow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingProgress(false, 1))
})

test('succsess unfollow thunk', async () => {
    // @ts-ignore
    userAPIMock.unfollow.mockReturnValue(result)

    const thunk = unfollow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingProgress(false, 1))
})