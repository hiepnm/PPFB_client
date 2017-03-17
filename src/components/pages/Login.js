import React, {Component, PropTypes} from 'react';
import * as actions from '../../actions';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class Login extends Component {
	constructor(props) {
		super(props);
		this.submitLogin = this.submitLogin.bind(this);
		this.submitFacebookLogin = this.submitFacebookLogin.bind(this);
		this.submitGoogleLogin = this.submitGoogleLogin.bind(this);
	}
	resetAll() {
		this.usernameInput.value = "";
		this.passwordInput.value = "";
	}
	submitLogin(e) {
		e.preventDefault();
		const username = this.usernameInput.value.trim();
		const password = this.passwordInput.value;
		const { login } = this.props;
		login(username, password).then(
			action => {
				switch(action.type) {
					case 'LOGIN_SUCCESS':
						browserHistory.push('/profile');
						break;
					case 'LOGIN_ERROR':
					default:
						alert(action.message);
						this.resetAll();
						break;
				}
			}
		)
	}
	submitFacebookLogin(e) {
		e.preventDefault();
		window.location.href="http://localhost:3002/api/v1/users/facebook";
		// window.open("http://localhost:3002/api/v1/users/facebook");
		// const { facebookLogin } = this.props;
		// facebookLogin().then(
		// 	action => {
		// 		switch(action.type) {
		// 			case 'LOGIN_SUCCESS':
		// 				browserHistory.push("/profile");
		// 				break;
		// 			case 'LOGIN_ERROR':
		// 			default:
		// 				alert(action.message);
		// 				this.resetAll();
		// 				break;
		// 		}
		// 	}
		// )
	}

	submitGoogleLogin(e) {
		e.preventDefault();
		const { googleLogin } = this.props;
		googleLogin().then(
			action => {
				switch(action.type) {
					case 'LOGIN_SUCCESS':
						browserHistory.push("/profile");
						break;
					case 'LOGIN_ERROR':
					default:
						// alert(action.message);
						this.resetAll();
						break;
				}
			}
		)
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<section className="auth-form">
							<form onSubmit={this.submitLogin} noValidate>
								<h2>Login</h2>
								<div className="form-group">
									<input type="text" placeholder="User Name" required className="form-control input-lg" ref={input => {this.usernameInput = input;}} onChange={this.handleUsernameChange}/>
								</div>
								<div className="form-group">
									<input type="password" placeholder="Password" className="form-control input-lg" ref={input => {this.passwordInput = input;}} onChange={this.handlePasswordChange}/>
								</div>
								
								<button type="submit" className="btn btn-lg btn-success btn-block">Sign in</button>
								<div className="form-group" style={{marginTop: "10px"}}>
									<div className="col-md-6">
										<button type="button" className="btn btn-sm btn-primary btn-block" onClick={this.submitFacebookLogin}>Facebook</button>
									</div>
									<div className="col-md-6">
										<button type="button" className="btn btn-sm btn-danger btn-block" onClick={this.submitGoogleLogin}>Google+</button>
									</div>
								</div>
								<div style={{marginTop: "10px"}}>
									<a role="button"
										onClick={
											e => {
												e.preventDefault();
												browserHistory.push('/register');
											}
										}
									>
										Create account
									</a> 
									{" "}or{" "}
									<a role="button"
										onClick={
											e => {
												e.preventDefault();
												browserHistory.push('/repass');
											}
										}
									>
										reset password
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

Login.propTypes = {
	login: PropTypes.func.isRequired,
	googleLogin: PropTypes.func.isRequired,
	facebookLogin: PropTypes.func.isRequired,
}


Login = connect(null, actions)(Login);

export default Login;