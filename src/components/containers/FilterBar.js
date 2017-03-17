import React, {PropTypes} from 'react';
import FilterLink from '../presents/FilterLink';
import {changeSearchQuery, changeSelectFilter, changeSortFilter} from '../../actions';
import { connect } from 'react-redux';
import * as config from '../../utility';

const FilterBar = ({dispatch}) => 
(
<nav style={{backgroundColor: "yellow"}}>
	<FilterLink filter="all">ALL</FilterLink> {' '}
	<FilterLink filter="mekong">BALANCE</FilterLink> {' '}
	<FilterLink filter="wallet">WALLET</FilterLink> {' '}
	&nbsp;&nbsp;&nbsp;<span>Type</span> {'   '}
	<select 
		name="filter" 
		id="filter"
		onChange={
			(e) => {
				e.preventDefault();
				const value = e.target.value.trim();
				dispatch(changeSelectFilter(value));
			}
		}
	>
		<option value={config.FILTER_ALL}>All</option>
		<option value={config.FILTER_SEND}>Sent</option>
		<option value={config.FILTER_RECEIVE}>Received</option>
		<option value={config.FILTER_WITHDRAW}>Withdraw</option>
		<option value={config.FILTER_TOPUP}>Topup</option>
	</select>
	&nbsp;&nbsp;&nbsp;<span>Sort By Time</span> {'   '}
	<select name="sortByTime" id="sortByTime"
		onChange={
			e => {
				e.preventDefault();
				const value = e.target.value;
				dispatch(changeSortFilter(value));
			}
		}
	>
		<option value={"newest"}>Newest</option>
		<option value={"oldest"}>Oldest</option>
	</select>
	<div style={{float: "right", marginRight: "10px"}}>
		<input 
			type="text" 
			placeholder="Search" 
			onChange={
				(e) => {
					e.preventDefault();
					const value = e.target.value.trim();
					dispatch(changeSearchQuery(value));
				}
			}
		/>
	</div>
	<div style={{clear: "right"}}></div>
	
</nav>
)

FilterBar.propTypes = {
	dispatch: PropTypes.func.isRequired,
};
export default connect()(FilterBar);
