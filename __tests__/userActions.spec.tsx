import configureMockStore from 'redux-mock-store';
import { addUser } from '../src/redux/actions/userActions';

const mockStore = configureMockStore();

describe('User Actions', () => {
  const initialState = { user: 'user' };
  const store = mockStore(initialState);

  describe('ADD_User', () => {
    it('should dispatch action properly', () => {
      store.dispatch(addUser('test'));

      const actions = store.getActions();

      const addUserAction = actions.find(action => action.type === 'ADD_USER');
      expect(addUserAction).toBeDefined();
      expect(addUserAction.payload).toBe('test');
    });
  });
});
