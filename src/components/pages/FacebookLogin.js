import React, {Component, PropTypes} from 'react';
import { withRouter, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {getIsAuthenticated} from '../../reducers';

class FacebookLogin extends Component {

	componentDidMount() {
		if (this.props.queryString!=="") {
			this.submitFacebookLogin();
		}
	}

	submitFacebookLogin() {
		const {facebookLogin, queryString} = this.props;
		facebookLogin(queryString).then(
			action => {
				switch(action.type) {
					case 'LOGIN_SUCCESS':
						browserHistory.push('/profile');
						break;
					case 'LOGIN_ERROR':
					default:
						alert(action.message);
						return;
				}
			}
		)
	}

	render() {
		const {isAuth} = this.props;
		return (
			<div>
				{
					!isAuth ?
					<div>Waiting for loging in....</div>
					:
					<div></div>
				}
			</div>
		)
	}
}

FacebookLogin.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	queryString: PropTypes.string.isRequired,
	facebookLogin: PropTypes.func.isRequired,
}
const mapStateToProps = (state, {location}) => {
	return {
		isAuth: getIsAuthenticated(state),
		queryString: location.search || "",
	}
}

FacebookLogin = withRouter(connect(
	mapStateToProps,
	actions
)(FacebookLogin))

export default FacebookLogin;