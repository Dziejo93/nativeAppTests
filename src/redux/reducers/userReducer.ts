import initialState from '../initialState';
import { Action, UserActions } from '../actions/userActions';

const userReducer = (
  state = initialState,
  action: Action<UserActions, string>
) => {
  const { type, payload } = action;

  switch (type) {
    case UserActions.ADD_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default userReducer;
