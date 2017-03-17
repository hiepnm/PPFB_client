import {combineReducers} from 'redux';
import user, * as fromUser from './user';

const store = combineReducers({
	user,
});

export default store;

//user
export const getUserId = (state) => fromUser.getUserId(state.user);
export const getIsAuthenticated = (state) => fromUser.getIsAuthenticated(state.user);
export const getUsername = (state) => fromUser.getUsername(state.user);
export const getUserEmail = (state) => fromUser.getUserEmail(state.user);

