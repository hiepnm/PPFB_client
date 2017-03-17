import React, {PropTypes} from 'react';
import InSide from './InSide';
import OutSide from './OutSide';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

let App = ({page}) => {
	switch (page) {
		case 'home':
		case 'login':
		case 'register':
		case 'activate':
		case 'facebook':
			return <OutSide />
		case 'profile':
		case 'work':
			return <InSide />
		default: 
			return null;
	}
}


App.propTypes = {
	page: PropTypes.string.isRequired,
}

const mapStateToProps = (state, {params}) => {
	const page = params.page || 'home';
	return {
		page,
	}
}

App = withRouter(connect(
	mapStateToProps, 
	null
)(App));
export default App;
