export const fixedNumber = n => Math.round(n*10**9)/10**9;

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SPECIAL_CHARACTER_REGEX = /[$@$!%*?&]/;
export const UPPER_ALPHABET_REGEX = /[A-Z]/;
export const LOWER_ALPHABET_REGEX = /[a-z]/;
export const NUMBER_REGEX = /[0-9]/;
//path to server
export const PATH_LOGIN = '/api/v1/users/login';
export const PATH_LOGIN_VIA_FACEBOOK = '/api/v1/users/facebook/callback';
export const PATH_LOGIN_VIA_GOOGLE = '/api/v1/users/test';
export const PATH_AUTH = '/api/v1/users/auth';
export const PATH_REGISTER = '/api/v1/users/register';
export const PATH_LOGOUT = '/api/v1/users/logout';
export const PATH_ACTIVATE = '/api/v1/users/activate';




export const getErrorEmail = (email) => {
		if (email.length === 0) {
			return "Email field is empty";
		}

		if (!EMAIL_REGEX.test(email)) {
			return "Email is not correct format";
		}
		return null;
	}
export const	getErrorUsername = (username) => {
	if (username.length === 0) {
		return "Username field is empty";
	}
	console.log("First Character:", username.substr(0, 1));
	if (!LOWER_ALPHABET_REGEX.test(username.substr(0, 1)) && !UPPER_ALPHABET_REGEX.test(username.substr(0, 1))) {
		return "Start with a..z or A..Z";
	}
	if (SPECIAL_CHARACTER_REGEX.test(username)) {
		return "Don't contain the special charater";
	}

	return null;
}

export const	getErrorPassword = (password) => {
	if (password.length < 6) {
		return "Password length must have at least 6 characters";
	}

	if (!LOWER_ALPHABET_REGEX.test(password)) {
		return "one {a..z} character is at least!";
	}
	if (!UPPER_ALPHABET_REGEX.test(password)) {
		return "one {A..Z} character is at least!";
	}
	if (!NUMBER_REGEX.test(password)) {
		return "one {0..9} character is at least!";
	}
	if (!SPECIAL_CHARACTER_REGEX.test(password)) {
		return "one of $@$!%*?& characters is at least!";
	}
	return null;
}