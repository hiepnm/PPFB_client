import React from 'react';
import {connect} from 'react-redux';
/*global FB*/
let Profile = ({dispatch}) => (
	<section>
		<div className="container">
			<div className="row">
				<div className="col col-sm-6">
					<button 
						className="btn btn-primary btn-md"
						onClick={
							e => {
								e.preventDefault();
								FB.ui({
									method: "share",
									href: "https://tinhte.vn"
								}, 
								response => {
									console.log(response);
								});
							}
						}
					>
						Share tinhte
					</button>
					<button 
						className="btn btn-primary btn-md"
						onClick={
							e => {
								e.preventDefault();
								FB.ui({
									method: "share_open_graph",
									action_type: 'og.likes',
									action_properties: JSON.stringify({
										object:'https://tinhte.vn',
									})
								}, 
								response => {
									console.log("response:",response);
								});
							}
						}
					>
						Share facebook dev
					</button>
					
				</div>
				<div className="col col-sm-6">
					<p style={{padding:"10px 10px 10px 10px"}}></p>
				</div>
			</div>
		</div>
	</section>
)

Profile = connect()(Profile);

export default Profile;