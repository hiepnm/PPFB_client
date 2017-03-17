import React from 'react'
import { browserHistory } from 'react-router';

const Home = () => (

	<div className='container'>
		<div className='row'>
			<div className="col-xs-4"></div>
			<div className="col-xs-4">
				<div className="row">
					<div className="col-xs-6">
						<button type="button" className="btn-primary btn-block"
							onClick={
								e => {
									e.preventDefault();
									browserHistory.push('/login');
								}
							}
						>
							LOGIN
						</button>
					</div>
					<div className="col-xs-6">
						<button type="button" className="btn-primary btn-block"
							onClick={
								e => {
									e.preventDefault();
									browserHistory.push('/register');
								}
							}
						>
							REGISTER
						</button>
					</div>
				</div>
				
				
			</div>
			<div className="col-xs-4"></div>
		</div>
	</div>
)

export default Home;