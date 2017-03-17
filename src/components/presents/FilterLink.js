import React from 'react';
import {Link} from 'react-router';

const FilterLink = ({filter, children}) => (
	<Link
		to={filter === "all" ? "/wallet/" : '/wallet/' + filter}
		activeStyle={{
			textDecoration: 'none',
			color: 'black',
			cursor: 'default'
		}}
	>
		{children}
	</Link>
);
export default FilterLink;