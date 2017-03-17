import React from 'react';
import {Link} from 'react-router';

const NavLink = ({page, children}) => (
	<Link
		to={"/"+page}
		activeStyle={{
			textDecoration: 'none',
			cursor: 'default',
			color: "#000"
		}}
	>
		{children}
	</Link>
);
export default NavLink;