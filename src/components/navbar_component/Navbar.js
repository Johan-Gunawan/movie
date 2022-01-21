import React from 'react';
import {Link} from 'react-router-dom';
import {getToken, deleteToken} from '../../UserToken';
import {getOneUserByToken} from '../../models/User';

class Navbar extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			showLoginMenu : false
		}

		this.logoutClicked = this.logoutClicked.bind(this);
	}

	componentDidMount(){
		const sessionToken = getToken();
		getOneUserByToken(sessionToken).then((res) => {
			if(res !== undefined){
				this.setState({
					showLoginMenu : true
				})
			}
		})
	}

	logoutClicked(){
		deleteToken();
	}

	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">DARING</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
						</li>
						{ this.state.showLoginMenu ? 
							<>
								<li className="nav-item">
									<Link to="/favorite" className="nav-link active" aria-current="page" href="#">Favorites</Link>
								</li>
								<li className="nav-item">
									<a href="/" className="nav-link active" aria-current="page" onClick={this.logoutClicked}>Logout</a>
								</li>
								
							</>
							:<>
							<li className="nav-item">
								<Link to="/login" className="nav-link active" aria-current="page" href="#">Login</Link>
							</li>
							<li className="nav-item">
								<Link to="/register" className="nav-link active" aria-current="page" href="#">Register</Link>
							</li></>
						}
					</ul>
					</div>
				</div>
				</nav>
		);
	}
}

export default Navbar;