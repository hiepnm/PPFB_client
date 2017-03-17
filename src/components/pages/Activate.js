import React, {Component, PropTypes} from 'react';
import { withRouter, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {getIsAuthenticated} from '../../reducers';


class Activate extends Component {

	componentDidMount() {
		if (this.props.keyActivate!=="") {
			this.submitActivate();
		}
	}

	submitActivate() {
		const {activate, keyActivate} = this.props;
		activate(keyActivate).then(
			action => {
				switch(action.type) {
					case 'ACTIVATE_SUCCESS':
						browserHistory.push('/profile');
						break;
					case 'ACTIVATE_ERROR':
					default:
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
					<div>User is not actived. Check email and comeback again!</div>
					:
					<div></div>
				}
			</div>
		)
	}
}
Activate.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	keyActivate: PropTypes.string.isRequired,
	activate: PropTypes.func.isRequired,
}
const mapStateToProps = (state, {params, location}) => {
	return {
		isAuth: getIsAuthenticated(state),
		keyActivate: location.query.key || "",
	}
}

Activate = withRouter(connect(
	mapStateToProps,
	actions
)(Activate))

export default Activate;