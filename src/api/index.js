import 'whatwg-fetch';
// import {browserHistory} from 'react-router';
import {
	PATH_LOGIN, 
	PATH_AUTH, 
	PATH_REGISTER, 
	PATH_LOGOUT,
	PATH_ACTIVATE,
	PATH_LOGIN_VIA_FACEBOOK,
	PATH_LOGIN_VIA_GOOGLE
} 
from '../global.js';

const postToServer = (path, data) =>
	fetch(path, {
		credentials: 'same-origin',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(
		response => {
			if (response.status !== 200) {
				return response.json().then(data => {throw Error(data.message)});
			}
			return response.json();
		},
		error => {
			throw Error(error);
		}
	);
	
const getFromServer = (path) =>
	fetch(path, {
		credentials: 'same-origin',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(
		response => {
			if (response.status !== 200) {
				return response.json().then(data => {throw Error(data.message)});
			}
			return response.json();
		},
		error => {
			throw Error(error);
		}
	);

const getFromServer2 = (path) =>
	fetch(path, {
		credentials: 'same-origin',
		method: 'GET'
	}).then(
		response => {
			console.log(response);
			if(response.status === 302) { 
				alert("Fuck, wait long!");
				console.log(response.headers.location);
			}
			if (response.status !== 200) {
				return response.json().then(data => {throw Error(data.message)});
			}
			window.location.href = response.url;
			// browserHistory.push(response.url);
			return {};
		},
		error => {
			console.log("error:", error);
			throw Error(error);
		}
	);

export const register = (username, email, password) => postToServer(PATH_REGISTER, {username, email, password});
export const login = (username, password) => postToServer(PATH_LOGIN, {username, password});
export const authenticate = () => getFromServer(PATH_AUTH);
export const logout = () => getFromServer(PATH_LOGOUT);
export const activate = (key) => postToServer(PATH_ACTIVATE, {key});
export const facebookLogin = (queryString) => getFromServer(PATH_LOGIN_VIA_FACEBOOK + queryString);
export const googleLogin = () => getFromServer2(PATH_LOGIN_VIA_GOOGLE);
