import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as Pages from '../pages';

const mapStateToProps = (state, {params}) => {
	const page = params.page || 'home';
	return {
		page,
	}
}

let Content = ({page}) => {
	switch(page) {
		case 'work':
			return <Pages.Work />;
		case 'profile':
			return <Pages.Profile />;
		case 'home':
			return <Pages.Home />
		case 'login':
			return <Pages.Login />
		case 'facebook':
			console.log("facebook login");
			return <Pages.FacebookLogin />
		case 'register':
			return <Pages.Register />
		case 'activate':
			return <Pages.Activate />
		default:
			return null;
	}
}

Content.propTypes = {
	page: PropTypes.string.isRequired,
}

Content = withRouter(connect(
	mapStateToProps,
	null
)(Content));

export default Content;