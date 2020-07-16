import { UserActionTypes } from './user.types';

// Action creators
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
