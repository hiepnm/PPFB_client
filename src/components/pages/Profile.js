import React from 'react';
import {connect} from 'react-redux';
/*global FB*/
let Profile = ({dispatch}) => (
	<section>
		<div className="container">
			<div className="row" style={{marginTop: "10px"}}>
				<div className="col col-sm-6">
				<div className="row">
						<div className="col col-xs-12">
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
						</div>
					</div>
					<div className="row" style={{marginTop: "10px"}}>
						<div className="col col-xs-12">
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
					</div>
					<div className="row" style={{marginTop: "10px"}}>
						<div className="col col-xs-12">
							<button 
								className="btn btn-primary btn-md"
								onClick={
									e => {
										e.preventDefault();
										FB.login(() => {
											FB.api('/me/feed', 'post', {message: 'Hello, world!'});
										}, {scope: 'publish_actions'});
									}
								}
							>
								Helloworld Feed
							</button>
						</div>
					</div>
					<div className="row" style={{marginTop: "10px"}}>
						<div className="col col-xs-12">
							<div className="fb-like" data-href="http://vnexpress.net" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
						</div>
					</div>
					<div className="row" style={{marginTop: "10px"}}>
						<div className="col col-xs-12">
							<div className="fb-comments" data-href="http://conek.io" data-numposts="10"></div>
						</div>
					</div>

					<div className="row" style={{marginTop: "10px"}}>
						<div className="col col-xs-12">
							<div className="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
						</div>
					</div>
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