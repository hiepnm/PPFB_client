import React, {Component, PropTypes} from 'react';
import NavBar from './containers/NavBar';
import Content from './containers/Content';
import * as actions from '../actions';
import { getIsAuthenticated } from '../reducers';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class InSide extends Component {

	componentDidMount() {
		const {isAuth} = this.props;
		if (!isAuth) {
			this.fetchData();
		}
	}

	fetchData() {
		const {authenticate} = this.props;
		authenticate().then(
			action => {
				switch(action.type) {
					case "AUTH_SUCCESS":
						return;
					case "AUTH_ERROR":
					default:
						alert(action.message);
						browserHistory.push("/login");
						return;
				}
			}
		)
	}

	render() {
		const {isAuth} = this.props;
		return (
			isAuth ? 
			<div>
				<NavBar />
				<Content />
			</div>
			:
			<div>Loading...</div>
		);
	}
};

InSide.propTypes = {
	isAuth: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
	return {
		isAuth: getIsAuthenticated(state),
	}
}

InSide = connect(
	mapStateToProps, 
	actions
)(InSide);
export default InSide;
