import profileReducer, { actions } from "../redux/profileReducer";

const state = {
  postsData: [
    { id: 1, message: "Hi? how are you?", likeCount: 0 },
    { id: 2, message: "It's my first post!", likeCount: 23 },
  ],
  profile: null,
  status: ""
};

test('length of posts should be incremented', () => {
  const action = actions.addPost('test')
  const newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(3);
});

test('message of new post shuld be correct', () => {
  const action = actions.addPost('test text');
  const newState = profileReducer(state, action);
  expect(newState.postsData[2].message).toBe('test text');
});

test('after deleting length of posts should be decrement', () => {
  const action = actions.deletePost(1);
  const newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(1);
});

test(`after deleting length of posts shouldn't be decrement if id is incorrect`, () => {
  const action = actions.deletePost("1");
  const newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(2);
});



