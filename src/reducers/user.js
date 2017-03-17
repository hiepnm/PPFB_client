const user = (state = {isAuthenticated: false}, action) => {
	switch (action.type) {
		case 'AUTH_SUCCESS':
			return {...action.response.entities.user[action.response.result], isAuthenticated: true};
		case 'LOGOUT_SUCCESS':
			return {isAuthenticated: false};
		case 'AUTH_ERROR':
		default:
			return state;
	}
}

export default user;
export const getIsAuthenticated = (user) => user.isAuthenticated;
export const getUsername = (user) => user.username;
export const getUserEmail = (user) => user.email;
export const getUserId = (user) => user._id;