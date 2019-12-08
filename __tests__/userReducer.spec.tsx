import configureMockStore from 'redux-mock-store';
import userReducer from '../src/redux/reducers/userReducer';
import { addUser } from '../src/redux/actions/userActions';

const mockStore = configureMockStore();

describe('User reducer', () => {
  const initialState = { user: 'user' };
  const store = mockStore(initialState);

  it('should return initial state when no action is passed', () => {
    const { getState } = store;

    const userStoreAfterChange = userReducer(getState(), {});

    expect(userStoreAfterChange).toBe(initialState);
  });
  describe('on ADD_USER action', () => {
    it('should change user', () => {
      const { getState } = store;

      const changedUser = { user: 'ChangedUser' };
      const userStoreAfterChange = userReducer(
        getState(),
        addUser(changedUser.user)
      );

      expect(userStoreAfterChange).toEqual(changedUser);
    });
  });
});
