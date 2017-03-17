import React, {Component, PropTypes} from 'react';
import * as actions from '../../actions';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {getErrorUsername, getErrorEmail, getErrorPassword} from '../../global';

class Register extends Component {
	constructor(props) {
		super(props);
		this.submitRegister = this.submitRegister.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.state = {
			isErrorUsername: false,
			isErrorEmail: false,
			isErrorPassword: false,
			notMatch: false,
			errorUsernameMessage: "",
			errorEmailMessage: "",
			errorPasswordMessage: "",
		}
	}

	usernameError(emsg) {
		this.setState({
			isErrorUsername: true,
			errorUsernameMessage: emsg,
		})
	}
	emailError(emsg) {
		this.setState({
			isErrorEmail: true,
			errorEmailMessage: emsg,
		})
	}
	passwordError(emsg) {
		this.setState({
			isErrorPassword: true,
			errorPasswordMessage: emsg,
		})
	}

	resetAllErrorUsername() {
		this.setState({
			isErrorUsername: false,
			errorUsernameMessage: "",
		});
	}
	resetAllErrorEmail() {
		this.setState({
			isErrorEmail: false,
			errorEmailMessage: "",
		});
	}
	resetAllErrorPassword() {
		this.setState({
			isErrorPassword: false,
			errorPasswordMessage: "",
			notMatch: false,
		});
	}
	
	resetAll() {
		this.usernameInput.value = "";
		this.emailInput.value = "";
		this.passwordInput.value = "";
		this.confirmInput.value = "";
		this.resetAllErrorUsername();
		this.resetAllErrorEmail();
		this.resetAllErrorPassword();
	}

	handleUsernameChange(e) {
		e.preventDefault();
		this.resetAllErrorUsername();
	}
	handleEmailChange(e) {
		e.preventDefault();
		this.resetAllErrorEmail();
	}
	handlePasswordChange(e) {
		e.preventDefault();
		this.resetAllErrorPassword();
	}
	
	validate() {
		const username = this.usernameInput.value.trim();
		const msgErrorUsername = getErrorUsername(username);
		if (msgErrorUsername) {
			this.usernameError(msgErrorUsername);
			return {error: true};
		}

		const email = this.emailInput.value.trim();
		const msgErrorEmail = getErrorEmail(email);
		if (msgErrorEmail) {
			this.emailError(msgErrorEmail);
			return {error: true};
		}

		const password = this.passwordInput.value;
		const msgErrorPassword = getErrorPassword(password);
		if (msgErrorPassword) {
			this.passwordError(msgErrorPassword);
			return {error: true};
		}

		const retype = this.confirmInput.value;
		if (retype !== password) {
			this.setState({notMatch: true});
			return {error: true};
		}

		return {error: null, username, email, password};
	}


	submitRegister(e) {
		e.preventDefault();
		const {error, username, email, password} = this.validate();
		if (error) {
			return;
		}
		const { register } = this.props;
		register(username, email, password).then(
			action => {
				switch(action.type) {
					case 'REGISTER_SUCCESS':
						browserHistory.push('/activate');
						break;
					case 'REGISTER_ERROR':
					default:
						alert(action.message);
						this.resetAll();
						break;
				}
			}
		)

	}

	render() {
		const {isErrorUsername, isErrorEmail, isErrorPassword, errorUsernameMessage, errorEmailMessage, errorPasswordMessage, notMatch} = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<section className="auth-form">
							<form onSubmit={this.submitRegister} noValidate>
								<h2>Register</h2>

								<div className={isErrorUsername ? "form-group has-error has-feedback" : "form-group" }>
									<input type="text" placeholder="User Name" required className="form-control input-lg" ref={input => {this.usernameInput = input;}} onChange={this.handleUsernameChange}/>
									<span style={{display: isErrorUsername ? "initial" : "none"}} className="glyphicon glyphicon-remove form-control-feedback"></span>
									<span style={{display: isErrorUsername ? "initial" : "none"}} className="help-block">{errorUsernameMessage}</span>
								</div>

								<div className={isErrorEmail ? "form-group has-error has-feedback" : "form-group" }>
									<input type="email" placeholder="Email" required className="form-control input-lg" ref={input => {this.emailInput = input;}} onChange={this.handleEmailChange}/>
									<span style={{display: isErrorEmail ? "initial" : "none"}} className="glyphicon glyphicon-remove form-control-feedback"></span>
									<span style={{display: isErrorEmail ? "initial" : "none"}} className="help-block">{errorEmailMessage}</span>
								</div>

								<div className={isErrorPassword ? "form-group has-error has-feedback" : "form-group"}>
									<input type="password" placeholder="Password" className="form-control input-lg" ref={input => {this.passwordInput = input;}} onChange={this.handlePasswordChange}/>
									<span style={{display: isErrorPassword ? "initial" : "none"}} className="glyphicon glyphicon-remove form-control-feedback"></span>
									<span style={{display: isErrorPassword ? "initial" : "none"}} className="help-block">{errorPasswordMessage}</span>
								</div>

								<div className={notMatch ? "form-group has-error has-feedback" : "form-group"}>
									<input type="password" placeholder="Re-type Password" className="form-control input-lg" ref={input => {this.confirmInput = input;}} onChange={this.handlePasswordChange}/>
									<span style={{display: notMatch ? "initial" : "none"}} className="glyphicon glyphicon-remove form-control-feedback"></span>
									<span style={{display: notMatch ? "initial" : "none"}} className="help-block">Retype doesn't match with password</span>
								</div>
								
								<button type="submit" className="btn btn-lg btn-primary btn-block">Register</button>
								<div style={{marginTop: "10px"}}>
									<a role="button"
										onClick={
											e => {
												e.preventDefault();
												browserHistory.push('/login');
											}
										}
									>
										Login
									</a> 
									{" "}or{" "}
									<a role="button"
										onClick={
											e => {
												e.preventDefault();
												browserHistory.push('/');
											}
										}
									>
										Home
									</a>
								</div>
							</form>
						</section>  
					</div>
					<div className="col-md-4"></div>
				</div>
			</div>
		)
	}
}

Register.propTypes = {
	register: PropTypes.func.isRequired,
}


Register = connect(null, actions)(Register);

export default Register;