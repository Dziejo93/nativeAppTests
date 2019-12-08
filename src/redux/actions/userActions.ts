export enum UserActions {
  ADD_USER = 'ADD_USER',
}

export type Action<T, P> = {
  type: T;
  payload: P;
};

export const addUser = (user: string): Action<UserActions, string> => ({
  type: UserActions.ADD_USER,
  payload: user,
});
