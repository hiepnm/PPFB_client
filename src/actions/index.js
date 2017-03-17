import {normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
// import {v4} from 'node-uuid';

//user
export const register = (username, email, password) => (dispatch, getState) => 
	api.register(username, email, password).then(
		response =>
			dispatch({
				type: 'REGISTER_SUCCESS'
			}),
		error => 
			dispatch({
				type: 'REGISTER_ERROR',
				message: error.message || 'Something went wrong.'
			})
	)

export const activate = (key) => (dispatch, getState) => 
	api.activate(key).then(
		response =>
			dispatch({
				type: 'ACTIVATE_SUCCESS'
			}),
		error => 
			dispatch({
				type: 'ACTIVATE_ERROR',
				message: error.message || 'Something went wrong.'
			})
	)
export const login = (email, password) => (dispatch, getState) => 
	api.login(email, password).then(
		response => 
			dispatch({
				type: 'LOGIN_SUCCESS',
			})
		,
		error => 
			dispatch({
				type: 'LOGIN_ERROR',
				message: error.message || 'Something went wrong.'
			})

	);

export const facebookLogin = (queryString) => (dispatch, getState) =>
	api.facebookLogin(queryString).then(
		response => 
			dispatch({
				type: 'LOGIN_SUCCESS',
			}),
		error => 
			dispatch({
				type: "LOGIN_ERROR",
				message: error.message || "Something went wrong."
			})
	);

export const googleLogin = () => (dispatch, getState) =>
	api.googleLogin().then(
		response => 
			dispatch({
				type: 'LOGIN_SUCCESS1',
			}),
		error => 
			dispatch({
				type: "LOGIN_ERROR",
				message: error.message || "Something went wrong."
			})
	);

export const authenticate = () => (dispatch, getState) =>
	api.authenticate().then(
		response =>
			dispatch({
				type: 'AUTH_SUCCESS',
				response: normalize(response, schema.user)
			}),
		error => 
			dispatch({
				type: 'AUTH_ERROR',
				message: error.message || 'Something went wrong.'
			})
	)

export const logout = () => (dispatch, getState) =>
	api.logout().then(
		response =>
			dispatch({
				type: 'LOGOUT_SUCCESS',
			}),
		error => 
			dispatch({
				type: 'LOGOUT_ERROR',
				message: error.message || 'Something went wrong.'
			})
	)
export const postActivate = () => 0;