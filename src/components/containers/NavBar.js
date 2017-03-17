import React, {Component, PropTypes} from 'react';
import NavLink from '../presents/NavLink';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {browserHistory} from "react-router";
import { getUsername } from '../../reducers';


class NavBar extends Component {

	constructor(props) {
		super(props);
		this.submitLogout = this.submitLogout.bind(this);
	}
	submitLogout(e) {
		e.preventDefault();
		const {logout} = this.props;
		logout().then(
			action => {
				switch(action.type) {
					case "LOGOUT_SUCCESS":
						browserHistory.push("/login");
						return;
					case "LOGOUT_ERROR":
					default:
						alert(action.message);
						return;
				}
			}
		)
	}
	render() {
		const {username} = this.props;

		return (
			<div >
					<NavLink page="profile">PROFILE</NavLink> {' '}
					<NavLink page="work">WORK</NavLink>
					<button style={{float: "right"}} onClick={this.submitLogout}>Logout</button>
					<span style={{float: "right", marginRight: "40px"}}>{username}</span>
					<div style={{clear: "right"}}></div>
			</div>
		);
	}
}
NavBar.propTypes = {
	logout: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
}
const mapStateToProps = (state) => {
	return {
		username: getUsername(state)
	}
}
NavBar = connect(mapStateToProps, actions)(NavBar);

export default NavBar;
